import { useContext } from "react";
import GlobalContext from "../../GlobalContext";
import { Link } from "react-router-dom";
import {
  NotesCategoryContainer,
  NotesTextList,
  NotesTextItem,
} from "./NotesCategoryStyles";

const NotesCategory = ({ category }) => {
  const { notes } = useContext(GlobalContext);

  const getNotesFromCategory = () => {
    let notesCopy = [...notes];
    notesCopy = notesCopy.filter((note) => {
      if (note.category === category) {
        return {
          category: note.category,
          id: note.id,
        };
      }
      return false;
    });
    return [...notesCopy];
  };

  return (
    <NotesCategoryContainer>
      <h2>{category}</h2>
      <NotesTextList>
        {getNotesFromCategory().map((note) => (
          <NotesTextItem key={note.id}>
            <Link to={`/edit-note/${note.id}`}>
              {note.text.replace(/(<([^>]+)>)/gi, "")}
            </Link>
          </NotesTextItem>
        ))}
      </NotesTextList>
    </NotesCategoryContainer>
  );
};

export default NotesCategory;
