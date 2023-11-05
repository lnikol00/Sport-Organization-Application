import express from "express"
import asyncHandler from "express-async-handler"
import * as photosController from "../controllers/photosController.js";

const photosRoute = express.Router();

photosRoute.get("/", asyncHandler(photosController.getAllPhotos));

export default photosRoute;