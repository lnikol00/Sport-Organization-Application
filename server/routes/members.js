import express from "express"
import asyncHandler from "express-async-handler"
import * as membersController from "../controllers/membersController.js";

const membersRoute = express.Router();

membersRoute.get("/", asyncHandler(membersController.getAllMembers));

export default membersRoute;