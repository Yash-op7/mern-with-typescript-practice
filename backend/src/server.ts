import express, { Application } from "express";
import connectToDatabase from "../utils/connectDB";
import env from "../utils/validateEnv";

import notesRouter from './routes/notesRoutes';

connectToDatabase();

// const app = express();
const app: Application = express();
app.use(express.json());

const PORT = env.PORT || 5000;

app.use('/notes', notesRouter);

app.get('/*', (req, res) => {
    return res.send('Route not found.').status(404);
})

app.listen(PORT, () => {
    console.log(`✅ server is running on ${PORT}`);
});
