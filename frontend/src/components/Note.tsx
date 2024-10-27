import { Note as NoteModel } from "../models/note";
// import axios from "axios";
import { deleteNoteById } from "@/api/notes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NoteProps {
  note: NoteModel;
  setNotes: React.Dispatch<React.SetStateAction<NoteModel[]>>;
}

export function Note({ note, setNotes }: NoteProps) {
  async function deleteNote() {
    deleteNoteById(note._id);
    setNotes((notes: NoteModel[]) => {
      return notes.filter((n) => n._id !== note._id);
    });
  }
  return (
    <div className="m-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-row justify-between items-center">
            <div>{note.title}</div>
            <Button
              variant="destructive"
              className="text-md"
              onClick={deleteNote}
            >
              Delete
            </Button>
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
        <CardContent className="max-h-12 text-ellipsis overflow-hidden">
          <p>{note.text ?? ""}</p>
        </CardContent>
        <CardFooter>
          <p></p>
        </CardFooter>
      </Card>
    </div>
  );
}
