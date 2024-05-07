import express from "express";
import {
  createComment,
  editComment,
  getPostComments,
  likeComment,
} from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getpostcomments/:postId", getPostComments);
router.put("/likeComent/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);

export default router;