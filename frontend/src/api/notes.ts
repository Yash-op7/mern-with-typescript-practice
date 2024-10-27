import { Note } from "@/models/note";
import axios from "axios";

const notesAPI = axios.create({
  baseURL: "http://localhost:5000/api/notes",
});

export const deleteNoteById = async function (id: string) {
  try {
    await notesAPI.delete(`/${id}`);
  } catch (error) {
    alert((error as Error).message);
    console.error(error);
  }
}

export const getNotes = async function (): Promise<Note[]> {
  try {
    const response = await notesAPI.get('/');
    return response.data;
  } catch (error) {
    alert((error as Error).message);
    console.error(error);
    return [];
  }
}