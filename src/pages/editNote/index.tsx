import { EditNoteStyles } from "./EditNoteStyles";
import Header from "../../components/header";
import NoteEditor from "../../components/noteEditor";

const EditNote = () => {
  return (
    <EditNoteStyles>
      <Header />
      <NoteEditor />
    </EditNoteStyles>
  );
};

export default EditNote;
