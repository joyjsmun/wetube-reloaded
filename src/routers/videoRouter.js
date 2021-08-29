import express from "express";
import { video, edit, remove, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", video);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove)
videoRouter.get("/upload", upload);

export default videoRouter;
