import { Note as NoteModel } from "../models/note";
import { deleteNoteById, updateNoteById } from "@/api/notes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

interface NoteProps {
  note: NoteModel;
  setNotes: React.Dispatch<React.SetStateAction<NoteModel[]>>;
}

function Note({ note, setNotes }: NoteProps) {
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [showFullText, setShowFullText] = useState(() => {
    if (note.text && note.text.length < 150) {
      return true;
    } else {
      return false;
    }
  });

  async function deleteNote() {
    await deleteNoteById(note._id);
    setNotes((notes: NoteModel[]) => {
      return notes.filter((n) => n._id !== note._id);
    });
  }
  async function updateNote() {
    const updatedNoteBody = { title, text };
    const updatedNote = await updateNoteById(note._id, updatedNoteBody);
    if(!updatedNote) {
      alert('Update failed.');
      return;
    }
    setNotes((notes: NoteModel[]) => {
      const filteredNotes = notes.filter((n) => n._id !== note._id);
      filteredNotes.push(updatedNote);
      return filteredNotes;
    });
  }

  const toggleTextDisplay = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div className="m-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-row justify-between items-center gap-3">
            {updateMode ? (
              <Input
              className=""
                required={true}
                type="text"
                value={title}
                name="title"
                placeholder={note.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <div>{note.title}</div>
            )}

            <div className="flex gap-2">
              <Button
                variant="destructive"
                className="text-md"
                onClick={deleteNote}
              >
                Delete
              </Button>
              <Button
                variant="outline"
                className="text-md"
                onClick={() => {
                  if(updateMode) {
                    updateNote();
                  }
                  setUpdateMode((prev) => !prev);
                }}
              >
                Update
              </Button>
            </div>
          </CardTitle>
          <CardDescription>
            {new Date(note.updatedAt).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-ellipsis overflow-hidden flex flex-row">
          {updateMode ? (
            <textarea
              name="text"
              placeholder={text}
              className="border rounded p-2"
              rows={2}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <>
              <p>
                {showFullText ? note.text : `${note.text?.slice(0, 50)}...`}
              </p>
              {note.text && note.text.length > 100 && (
                <button onClick={toggleTextDisplay} className="text-blue-500">
                  {showFullText ? "Show Less" : "Show More"}
                </button>
              )}
            </>
          )}
        </CardContent>
        <CardFooter>
          <p></p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Note;
