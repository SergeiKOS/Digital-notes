import { NoteCard, NoteTitle } from "./NoteStyles";
import Quill from './quill/Quill'

const Note = ({ note: { title, id }, onChange }) => {
  return (
    <NoteCard>
      <NoteTitle onChange={(e) => onChange(e, id)} value={title} maxLength="20"/>
      <Quill/>
    </NoteCard>
  );
};

export default Note;
