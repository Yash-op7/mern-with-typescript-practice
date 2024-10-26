import express, { Application } from "express";
import connectToDatabase from "./utils/connectDB";
import env from "./utils/validateEnv";
import morgan from 'morgan';
import cors from 'cors';

import notesRouter from './routes/notesRouter';

connectToDatabase();

// const app = express();
const app: Application = express();
app.use(express.json());

app.use(morgan('dev'));
app.use(cors());
const PORT = env.PORT || 5000;

app.use('/api/notes', notesRouter);

app.get('/*', (req, res) => {
    return res.send('Route not found.').status(404);
})

app.listen(PORT, () => {
    console.log(`✅ server is running on ${PORT}`);
});
