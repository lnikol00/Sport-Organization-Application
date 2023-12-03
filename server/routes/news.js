import express from "express"
import asyncHandler from "express-async-handler"
import * as newsController from "../controllers/newsController.js";
import { protect, admin } from "../middleware/AuthMiddleware.js";

const newsRoute = express.Router();

newsRoute.route("/")
    .get(asyncHandler(newsController.getAllNews))
    .post(protect, admin, asyncHandler(newsController.createNews));

newsRoute.route("/:id")
    .get(asyncHandler(newsController.getSingleNews))
    .put(protect, admin, asyncHandler(newsController.editNews))
    .delete(protect, admin, asyncHandler(newsController.deleteNews));

export default newsRoute;