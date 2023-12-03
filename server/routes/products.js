import express from "express"
import asyncHandler from "express-async-handler"
import * as productController from "../controllers/productController.js";
import { protect, admin } from "../middleware/AuthMiddleware.js"

const productRoute = express.Router();

productRoute.route("/")
    .get(asyncHandler(productController.getAllProducts))
    .post(protect, admin, asyncHandler(productController.createProduct));

productRoute.route("/:id")
    .get(asyncHandler(productController.getSingleProduct))
    .put(protect, admin, asyncHandler(productController.editProduct))
    .delete(protect, admin, asyncHandler(productController.deleteProduct));

export default productRoute;