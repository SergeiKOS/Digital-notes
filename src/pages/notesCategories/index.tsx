import { useContext } from "react";
import GlobalContext from "../../GlobalContext";
import Note from "../../types/Note";
import Header from "../../components/header";
import NotesCategory from "../../components/notesCategory";
import { NotesCategoryWrapper } from "./NotesCategories";

const NotesCategories = () => {
  const { notes } = useContext(GlobalContext);

  const getCategories = () => {
    return [...new Set(notes.map((note: Note) => note.category))];
  };

  return (
    <>
      <Header withButton={true} mainPage={true} />
      <NotesCategoryWrapper>
        {getCategories().map((category) => (
          <NotesCategory category={category} key={`${category}id`} />
        ))}
      </NotesCategoryWrapper>
    </>
  );
};

export default NotesCategories;
