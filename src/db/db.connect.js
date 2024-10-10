import mongoose from "mongoose";
const connectDB = async () => {
    try {
      console.log("trying to connect to database");
      await mongoose.connect(process.env.db_url);
      console.log("server connect to the database");
    } catch (error) {
      console.log(error);
    }
  };
  export { connectDB };
  