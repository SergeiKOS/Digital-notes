import { NoteCard, NoteTitle, EditNoteArea } from "./NoteStyles";

const Note = ({ note: { title, text, id }, onChange }) => {
  return (
    <NoteCard>
      <NoteTitle onChange={(e) => onChange(e, id)} value={title} maxLength="20"/>
      <EditNoteArea
        style={{ height: "100%", width: "100%" }}
        value={text}
        onChange={(e) => onChange(e, id)}
      />
    </NoteCard>
  );
};

export default Note;
