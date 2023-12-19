import mongoose from "mongoose";

const connectDb = async () => {
  try {
    return mongoose.connect("mongodb://localhost:27017/vitdata");
  } catch (error) {
    return error;
  }
};

export default connectDb;
