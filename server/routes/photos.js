import express from "express"
import asyncHandler from "express-async-handler"
import * as photosController from "../controllers/photosController.js";

const photosRoute = express.Router();

//ALL PHOTOS
photosRoute.get("/", asyncHandler(photosController.getAllPhotos));

export default photosRoute;