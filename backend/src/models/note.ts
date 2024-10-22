import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        default:''
    },

}, {
    timestamps:true
});

type Note = mongoose.InferSchemaType<typeof noteSchema>;

const Note = mongoose.model<Note>("Note", noteSchema);
export default Note;
