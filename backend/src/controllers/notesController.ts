import { RequestHandler } from "express";
import Note from "../models/note";

const getAllNotes: RequestHandler = async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).json({
      message: "DB error.",
      error,
    });
  }
};

const getNoteById: RequestHandler = async (req, res) => {
  return res.status(200).json({ note: res.locals.note });
};

interface NewNoteBody {
  title: string;
  text?: string;
}

const createNote: RequestHandler<
  unknown,
  unknown,
  NewNoteBody,
  unknown
> = async (req, res) => {
  //   const { title, text } = req.body;
  const { title, text = "No Text Content" } = req.body; // Set a default value for text
  try {
    const note = await Note.create({ title, text });
    return res
      .json({
        message: "✅ New Note successfully created.",
        note
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

const updateNote: RequestHandler = async (req, res) => {
  const { title, text } = req.body;
  const note = res.locals.note;

  const updatedNote = {
    ...note.toObject(),
    ...(text !== undefined && { text }),
    ...(title !== undefined && { title }),
  };

  try {
    await Note.findByIdAndUpdate(note._id, updatedNote);
    return res.status(200).json({
      message: "Updated the note successfully.",
      note: updatedNote
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while updating in the DB.",
      error: (error as Error).message,
    });
  }
};

const deleteNote: RequestHandler = async (req, res) => {
  try {
    await Note.findByIdAndDelete(res.locals.note._id);
    return res.status(200).json({
      message: "Successfully deleted note.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while updating in the DB.",
      error: (error as Error).message,
    });
  }
};

export default { createNote, getAllNotes, getNoteById, updateNote, deleteNote };
