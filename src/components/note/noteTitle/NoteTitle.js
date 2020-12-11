import { NoteHeader } from "./NoteTitleStyles";

const NoteTitle = ({note: { title, id }, onChange }) => {
  return (
    <NoteHeader onChange={(e) => onChange(e, id)} value={title} maxLength="20"/>
  )
}

export default NoteTitle
