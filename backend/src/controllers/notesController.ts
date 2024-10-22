import { Request, RequestHandler, Response } from "express";
import Note from "../models/note";

const getAllNotes: RequestHandler = async (req, res) => {
    try {
        const notes = await Note.find();
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(500).json({
            message: 'DB error.',
            error
        });
    }
}



const createNote: RequestHandler = async (req:Request, res:Response): Promise<Response> => {
    const {title, text} = req.body;
    try {
        await Note.create(
            {
                title, text
            }
        );
        return res.json(
            {
                message: '✅ New Note successfully created.'
            }
        ).status(201);
    } catch (error) {
        return res.status(500).json({
            error
        });
    }
}

export default {createNote, getAllNotes};