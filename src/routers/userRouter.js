import express from "express";
import { edit, remove, profile, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/logout", logout);
userRouter.get("/remove", remove);
userRouter.get("/:id(\\d+)", profile);

export default userRouter;