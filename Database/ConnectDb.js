import mongoose from "mongoose";

const connectDb = async () => {
  try {
    return mongoose.connect("mongodb+srv://vithrms:vithrms@cluster0.el3qfoz.mongodb.net/?retryWrites=true&w=majority");
  } catch (error) {
    return error;
  }
};

export default connectDb;
