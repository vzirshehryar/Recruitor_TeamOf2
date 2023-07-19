import mongoose from "mongoose";

// mongodb+srv://ahadshams002:Xzfm48q09VRSb9uG@cluster0.apoovvk.mongodb.net/?retryWrites=true&w=majority

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ahadshams002:Xzfm48q09VRSb9uG@cluster0.apoovvk.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected with ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
