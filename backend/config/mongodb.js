
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  const uri = process.env.MONGODB_URI;
  if (!uri || (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://"))) {
    throw new Error("Invalid MongoDB URI. Please check your .env file.");
  }
  await mongoose.connect(`${uri}prescripto`);
};

export default connectDB;
