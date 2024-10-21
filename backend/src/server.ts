import express, { Request, Response, Application } from "express";
import connectToDatabase from "../utils/connectDB";
import env from "../utils/validateEnv";
import Note from "./models/note";

connectToDatabase();

// const app = express();
const app: Application = express();

const PORT = env.PORT || 5000;

app.get("/", async (req: Request, res: Response): Promise<Response> => {
    try {
        const notes = await Note.find();
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(500).json({
            message: 'DB error.',
            error
        });
    }
});

app.listen(PORT, () => {
    console.log(`✅ server is running on ${PORT}`);
});
