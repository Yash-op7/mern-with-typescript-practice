import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { NewNoteBody, Note } from "@/models/note";
import { createNote } from "@/api/notes";

interface NewNoteProps {
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  }
  

const NewNote = ({ setNotes }: NewNoteProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const newNote: NewNoteBody = {
      title: formData.get("title") as string,
      text: formData.get("text") as string,
    };

    try {
      const createdNote = await createNote(newNote);
      if (createdNote) {
        setNotes((notes) => [...notes, createdNote]);
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };
  return (
    <div className="m-3">
      <Card>
        <CardHeader>
          <CardTitle>
            <div>New Note</div>
          </CardTitle>
          <CardDescription>Create a new note.</CardDescription>
        </CardHeader>
        <CardContent >
          <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-3">
            <Input
              required={true}
              type="text"
              name="title"
              placeholder="Enter Title"
              className="font-bold"
            />

            <textarea
              name="text"
              placeholder="Enter Content"
              className="border rounded p-2"
              rows={2}
            />

            <Button type="submit" className="w-20">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewNote;
