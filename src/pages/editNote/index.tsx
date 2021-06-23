import * as S from "./EditNoteStyles";
import Header from "../../components/header";
import NoteEditor from "../../components/noteEditor";

const EditNote = () => {
  return (
    <S.EditNote>
      <Header />
      <NoteEditor />
    </S.EditNote>
  );
};

export default EditNote;
