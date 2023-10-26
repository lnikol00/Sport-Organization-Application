import News from "../models/NewsModel.js";

//GET ALL NEWS
export const getAllNews = async (req, res) => {
    const news = await News.find({})
    res.json(news);
}