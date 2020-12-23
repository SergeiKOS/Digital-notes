import { useContext } from "react";
import GlobalContext from "../../GlobalContext";
import { NotesCategoryContainer } from "./NotesCategoryStyles";

const NotesCategory = ({ category }) => {
  const { notes } = useContext(GlobalContext);

  const getNotesFromCategory = () => {
    let notesCopy = [...notes];
    notesCopy = notesCopy.filter((note) => note.category === category);
    return notesCopy;
  };

  return (
    <NotesCategoryContainer>
      <h2>{category}</h2>
      {getNotesFromCategory().map((note) => (
        <div>{note.text.replace(/(<([^>]+)>)/gi, "")}</div>
      ))}
    </NotesCategoryContainer>
  );
};

export default NotesCategory;
