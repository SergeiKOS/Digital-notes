import { NoteHeader } from "./NoteTitleStyles";

const NoteTitle = ({note: { title, id }, onChange, cardsAmount }) => {
  return (
    <NoteHeader onChange={(e) => onChange(e, false, id)} value={title || `Card ${cardsAmount}`} maxLength="20"/>
  )
}

export default NoteTitle
