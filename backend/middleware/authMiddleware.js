import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../usermodel.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log(token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(decoded);

      req.user = await User.findById(decoded.id).select("-password");
      console.log(req.user);

      next();
    } catch (error) {
      res.status(401);

      console.error("unauthorised user, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("unauthorised user, token not found");
  }
});
