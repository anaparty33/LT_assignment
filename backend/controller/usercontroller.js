import User from "../usermodel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    res.status(400);
    throw new Error("user already exists");
  }

  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await user.checkPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});

// Private /api/profile
// GET
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});
