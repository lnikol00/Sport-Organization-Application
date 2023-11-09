import express from "express"
import User from "../models/UserModel.js"
import Product from "../models/ProductModel.js"
import News from "../models/NewsModel.js"
import Photos from "../models/PhotosModel.js"
import Member from "../models/MembersModel.js"
import users from "../data/Users.js"
import products from "../data/Products.js"
import news from "../data/News.js"
import photos from "../data/Photos.js"
import members from "../data/Members.js"
import asyncHandler from "express-async-handler"

const ImportData = express.Router()

ImportData.post(
    "/user",
    asyncHandler(async (req, res) => {
        await User.deleteMany({});
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    })
);

ImportData.post(
    "/products",
    asyncHandler(async (req, res) => {
        await Product.deleteMany({});
        const importProducts = await Product.insertMany(products);
        res.send({ importProducts });
    })
);

ImportData.post(
    "/news",
    asyncHandler(async (req, res) => {
        await News.deleteMany({});
        const importNews = await News.insertMany(news);
        res.send({ importNews });
    })
);

ImportData.post(
    "/photos",
    asyncHandler(async (req, res) => {
        await Photos.deleteMany({});
        const importPhotos = await Photos.insertMany(photos);
        res.send({ importPhotos });
    })
);

ImportData.post(
    "/members",
    asyncHandler(async (req, res) => {
        await Member.deleteMany({});
        const importMembers = await Member.insertMany(members);
        res.send({ importMembers });
    })
);

export default ImportData