import Photos from "../models/PhotosModel.js";

//GET ALL PHOTOS
export const getAllPhotos = async (req, res) => {
    const photos = await Photos.find({})
    res.json(photos);
}

// CREATE NEW PHOTO
export const createNewPhoto = async (req, res) => {
    const { image } = req.body;
    const photo = new Photos({
        image,
        user: req.user._id
    });
    if (photo) {
        const createdNewPhoto = await photo.save()
        res.status(201).json(createdNewPhoto);
    } else {
        res.status(400);
        throw new Error("Invalid data");
    }
}

// DELETE PHOTO
export const deletePhoto = async (req, res) => {
    const photo = await Photos.findById(req.params.id);

    if (photo) {
        await photo.deleteOne();
        res.json({ message: "Photo deleted!" });
    } else {
        res.status(404);
        throw new Error("Photo not found");
    }
}