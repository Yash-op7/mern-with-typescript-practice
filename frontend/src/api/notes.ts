import { NewNoteBody, Note, UpdateNoteBody } from "@/models/note";
import axios from "axios";

const notesAPI = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/notes`,
  // baseURL: `http://localhost:5000/api/notes`,
});

const handleError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "An unexpected error occurred";
    const status = error.response?.status;

    switch (status) {
      case 400:
        alert(`Bad Request: ${message}`);
        break;
      case 401:
        alert(`Unauthorized: ${message}`);
        break;
      case 404:
        alert(`Not Found: ${message}`);
        break;
      case 500:
        alert(`Internal Server Error: ${message}`);
        break;
      default:
        alert(`Error: ${message}`);
    }

    console.error(message);
  } else {
    alert("An unexpected error occurred");
    console.error(error);
  }
};

export const deleteNoteById = async function (id: string): Promise<void> {
  try {
    await notesAPI.delete(`/${id}`);
  } catch (error) {
    handleError(error);
  }
};

export const getNotes = async function (): Promise<Note[]> {
  try {
    const response = await notesAPI.get("/");
    return response.data;
  } catch (error) {
    handleError(error);
    return [];
  }
};

export const createNote = async function (
  newNote: NewNoteBody
): Promise<Note | undefined> {
  try {
    const response = await notesAPI.post("/", newNote);
    return response.data.note;
  } catch (error) {
    handleError(error);
  }
};

export const updateNoteById = async function(id: string, updatedNote: UpdateNoteBody): Promise<Note | undefined> {
  try {
    const response = await notesAPI.patch(`/${id}`, updatedNote);
    return response.data.note;
  } catch (error) {
    handleError(error);
  }
}