export interface Note {
  _id: string;
  title: string;
  text?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewNoteBody {
  title: string;
  text?: string;
}
export interface UpdateNoteBody {
  title?: string;
  text?: string;
}
