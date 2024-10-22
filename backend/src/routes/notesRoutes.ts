import express from 'express';
const router = express.Router();
import notesController from '../controllers/notesController';

router.get("/", notesController.getAllNotes);

router.post('/', notesController.createNote);

export default router;