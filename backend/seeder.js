import mongoose from "mongoose";
import users from "./data/users.js";
import dotenv from "dotenv";
import connectDB from "./config.js";
import User from "./usermodel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    process.exit();
  } catch (error) {
    console.log(`error sending data ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
  } catch (error) {
    console.log(`error deleting ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destrotData();
} else {
  importData();
}
