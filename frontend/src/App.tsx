import { useEffect, useState } from "react";
import {getNotes} from "./api/notes";
import { Note as NoteModel } from "./models/note";
import NewNote from "./components/NewNote";
import Note from "./components/Note";

export default function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    getNotes().then((notes) => setNotes(notes));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => {
        return <Note key={note._id} note={note} setNotes={setNotes} />;
      })}
      <NewNote setNotes={setNotes} />
    </div>
  );
}
