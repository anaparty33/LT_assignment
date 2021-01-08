import express from "express";
import {
  registerUser,
  authUser,
  getUserProfile,
} from "../controller/usercontroller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
