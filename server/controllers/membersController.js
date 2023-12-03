import Member from "../models/MembersModel.js";

//GET ALL MEMBERS
export const getAllMembers = async (req, res) => {
    const members = await Member.find({})
    res.json(members);
}

// CREATE NEW MEMBER
export const createNewMember = async (req, res) => {
    const { name, role, image } = req.body;
    const memberExist = await Member.findOne({ name });
    if (memberExist) {
        res.status(400);
        throw new Error("Member already exists!")
    }
    else {
        const member = new Member({
            name,
            image,
            role,
            user: req.user._id
        });
        if (member) {
            const createdMember = await member.save()
            res.status(201).json(createdMember);
        } else {
            res.status(400);
            throw new Error("Invalid member data");
        }
    }
}

// EDIT MEMBER
export const editMember = async (req, res) => {
    const { name, image, role } = req.body;
    const member = await Member.findById(req.params.id);
    if (member) {
        member.name = name;
        member.image = image;
        member.role = role;

        const updatedMember = await member.save();
        res.status(201).json(updatedMember);
    }
    else {
        res.status(400);
        throw new Error("Member not found");
    }
}

// DELETE MEMBER
export const deleteMember = async (req, res) => {
    const member = await Member.findById(req.params.id);

    if (member) {
        await member.deleteOne();
        res.json({ message: "Membmer deleted!" });
    } else {
        res.status(404);
        throw new Error("Member not found");
    }
}