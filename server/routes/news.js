import express from "express"
import asyncHandler from "express-async-handler"
import * as newsController from "../controllers/newsController.js";

const newsRoute = express.Router();

//ALL NEWS
newsRoute.get("/", asyncHandler(newsController.getAllNews));

//UNIQUE NEWS
newsRoute.get("/:id", asyncHandler(newsController.getSingleNews));

export default newsRoute;