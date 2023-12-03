import express from "express"
import asyncHandler from "express-async-handler"
import * as membersController from "../controllers/membersController.js";
import { protect, admin } from "../middleware/AuthMiddleware.js";

const membersRoute = express.Router();

membersRoute.route("/")
    .get(asyncHandler(membersController.getAllMembers))
    .post(protect, admin, asyncHandler(membersController.createNewMember));

membersRoute.route("/:id")
    .put(protect, admin, asyncHandler(membersController.editMember))
    .delete(protect, admin, asyncHandler(membersController.deleteMember));

export default membersRoute;