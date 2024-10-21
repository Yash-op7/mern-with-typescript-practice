import express from "express";
import connectToDatabase from '../utils/connectDB';
import env from "../utils/validateEnv";

connectToDatabase();

const app = express();
const PORT = env.PORT || 5000;


app.get("/test", (req, res) => {
  res.send("hello, world");
});

app.listen(PORT, () => {
  console.log(`✅ server is running on ${PORT}`);
});
