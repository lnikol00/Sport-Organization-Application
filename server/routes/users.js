import express from "express"
import asyncHandler from "express-async-handler"
import * as userController from "../controllers/userController.js";
import protect from "../middleware/AuthMiddleware.js";

const userRoute = express.Router();

//LOGIN
userRoute.post("/login", asyncHandler(userController.handleLogin));

//PROFILE
userRoute.route("/profile")
    .get(protect, asyncHandler(userController.handleProfile))
    .put(protect, asyncHandler(userController.handleProfileUpdate));

//REGISTER
userRoute.post('/', asyncHandler(userController.handleRegister));

export default userRoute;