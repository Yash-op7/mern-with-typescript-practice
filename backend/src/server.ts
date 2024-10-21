import express from "express";
import mongoose from "mongoose";


import env from "../utils/validateEnv";

const app = express();
const PORT = env.PORT || 5000;

mongoose.connect(env.MONGO_URI!);
const db_conn = mongoose.connection;
db_conn.on("error", () => {
  console.log("❌ error connecting to the db");
});
db_conn.once("open", () => {
  console.log("✅ connected to the db");
});

app.get("/test", (req, res) => {
  res.send("hello, world");
});

app.listen(PORT, () => {
  console.log(`✅ server is running on ${PORT}`);
});
