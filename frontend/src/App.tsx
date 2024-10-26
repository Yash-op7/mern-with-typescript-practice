import { useEffect, useState } from "react";
import axios from "axios";
import { Note as NoteModel } from "./models/note";
import { Note } from "./components/Note";

export default function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await axios.get('http://localhost:5000/api/notes');
      return response.data;
    }

    fetchNotes().then((data) => setNotes(data)).catch((error) => {
      console.error("Error fetching notes:", error);
    });
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
}


