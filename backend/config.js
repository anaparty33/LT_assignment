import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`connected to mongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export default connectDB;
