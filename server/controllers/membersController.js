import Member from "../models/MembersModel.js";

//GET ALL MEMBERS
export const getAllMembers = async (req, res) => {
    const members = await Member.find({})
    res.json(members);
}