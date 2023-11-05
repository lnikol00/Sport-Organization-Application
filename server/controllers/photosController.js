import Photos from "../models/PhotosModel.js";

//GET ALL PHOTOS
export const getAllPhotos = async (req, res) => {
    const photos = await Photos.find({})
    res.json(photos);
}