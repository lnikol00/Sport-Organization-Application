import express from "express"
import asyncHandler from "express-async-handler"
import * as productController from "../controllers/productController.js";

const productRoute = express.Router();

//ALL PRODUCTS
productRoute.get("/", asyncHandler(productController.getAllProducts));

//UNIQUE PRODUCT
productRoute.get("/:id", asyncHandler(productController.getSingleProduct));

export default productRoute;