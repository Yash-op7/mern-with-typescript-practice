import { Note as NoteModel } from "../models/note";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NoteProps {
  note: NoteModel;
}

export function Note({ note }: NoteProps) {
  return (
    <div className="m-3">
      <Card>
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>{note.updatedAt}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{note.text ?? ''}</p>
        </CardContent>
        <CardFooter>
          <p></p>
        </CardFooter>
      </Card>
    </div>
  );
}
