import { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../../GlobalContext";
import {
  NotesCategoryContainer,
  NotesTextList,
  NotesTextItem,
} from "./NotesCategoryStyles";

const NotesCategory = ({ category }) => {
  const { notes, setNotes } = useContext(GlobalContext);

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

  const handleAddNote = () => {
    let notesCopy = [...notes];

    setNotes([
      ...notesCopy,
      {
        id: uuidv4(),
        category: category,
        text: "",
      },
    ]);
  };

  return (
    <NotesCategoryContainer>
      <h2>{category}</h2>
      <button onClick={handleAddNote}>Add note</button>
      <NotesTextList>
        {getNotesFromCategory().map((note) => (
          <Link to={`/edit-note/${note.id}`} key={note.id}>
            <NotesTextItem>
              {note.text.replace(/(<([^>]+)>)/gi, "")}
            </NotesTextItem>
          </Link>
        ))}
      </NotesTextList>
    </NotesCategoryContainer>
  );
};

export default NotesCategory;
