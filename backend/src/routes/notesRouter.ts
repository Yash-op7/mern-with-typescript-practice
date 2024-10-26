import express from 'express';
const router = express.Router();
import notesController from '../controllers/notesController';
import {validateNewNote} from '../utils/validateReqBody';
import { validateNoteId } from '../utils/validators/validateNoteId';
   

router.get("/", notesController.getAllNotes);
router.get('/:id', validateNoteId, notesController.getNoteById);
router.post('/', validateNewNote, notesController.createNote);
router.patch('/:id', validateNoteId, notesController.updateNote);
router.delete('/:id', validateNoteId, notesController.deleteNote);


export default router;