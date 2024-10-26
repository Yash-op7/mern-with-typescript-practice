import mongoose from "mongoose";
import env from "./validateEnv";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(env.MONGO_URI!);
    console.log("✅ connected to the db");

    const db_conn = mongoose.connection;
    db_conn.on("error", () => {
      console.log("❌ error connecting to the db");
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

export default connectToDatabase;
