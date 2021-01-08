import express from "express";
import dotenv from "dotenv";
import connectDB from "./config.js";
import userRoutes from "./routes/userRoutes.js";
import path from "path";
const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use("/api", userRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Hello user");
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`server running on  ${PORT}`));
