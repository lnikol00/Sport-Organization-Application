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

// CREATE NEWS
export const createNews = async (req, res) => {
    const { title, image, description, body } = req.body;
    const newsExist = await News.findOne({ title });
    if (newsExist) {
        res.status(400);
        throw new Error("News already exists!")
    }
    else {
        const news = new News({
            title,
            image,
            description,
            body,
            user: req.user._id
        });
        if (news) {
            const createdNews = await news.save()
            res.status(201).json(createdNews);
        } else {
            res.status(400);
            throw new Error("Invalid news data");
        }
    }
}

// DELETE NEWS
export const deleteNews = async (req, res) => {
    const news = await News.findById(req.params.id);

    if (news) {
        await news.deleteOne();
        res.json({ message: "News deleted!" });
    } else {
        res.status(404);
        throw new Error("News not found");
    }
}

// EDIT NEWS
export const editNews = async (req, res) => {
    const { title, image, description, body } = req.body;
    const news = await News.findById(req.params.id);
    if (news) {
        news.title = title;
        news.image = image;
        news.description = description;
        news.body = body;

        const updateNews = await news.save();
        res.status(201).json(updateNews);
    }
    else {
        res.status(400);
        throw new Error("News not found");
    }
}