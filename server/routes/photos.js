import express from "express"
import asyncHandler from "express-async-handler"
import * as photosController from "../controllers/photosController.js";
import { protect, admin } from "../middleware/AuthMiddleware.js";

const photosRoute = express.Router();

photosRoute.route("/")
    .get(asyncHandler(photosController.getAllPhotos))
    .post(protect, admin, asyncHandler(photosController.createNewPhoto));

photosRoute.delete("/:id", protect, admin, asyncHandler(photosController.deletePhoto));

export default photosRoute;