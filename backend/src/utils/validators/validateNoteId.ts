import { RequestHandler } from "express";
import Note from "../../models/note";
import mongoose from "mongoose";

export const validateNoteId: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  // Validate the ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  
  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ error: "Note not found." });
    }

    res.locals.note = note;
    next();

  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving the note" });
  }
};
