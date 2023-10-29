import News from "../models/NewsModel.js";

//GET ALL NEWS
export const getAllNews = async (req, res) => {
    const news = await News.find({})
    res.json(news);
}

//GET SINGLE NEWS
export const getSingleNews = async (req, res) => {
    const news = await News.findById(req.params.id)
    if (news) {
        res.json(news);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
}