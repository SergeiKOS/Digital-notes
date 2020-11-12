import {useRef} from 'react'
import { NoteCard, NoteTitle, EditNoteArea } from "./NoteStyles";

const Note = ({ note: { title, text, id }, onChange, onClick }) => {
  const inputRef = useRef(null)
  return (
    <NoteCard>
      <NoteTitle onChange={(e) => onChange(e, id)} value={title} maxLength="20"/>
      <EditNoteArea
        style={{ height: "100%", width: "100%" }}
        value={text}
        onChange={(e) => onChange(e, id)}
        ref={inputRef}
      />
      <button onClick={()=>onClick(inputRef)}>Click</button>
    </NoteCard>
  );
};

export default Note;
