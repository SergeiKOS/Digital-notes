import { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../../GlobalContext";
import NotesCategoryName from "./notesCategoryName";
import {
  NotesCategoryContainer,
  NotesWrapper,
} from "./NotesCategoryStyles";
import NotesItem from './notesItem'

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
      <NotesCategoryName category={category} />
      <button onClick={handleAddNote}>Add note</button>
      <NotesWrapper>
        {getNotesFromCategory().map((note) => (
          <Link to={`/edit-note/${note.id}`} key={note.id}>
            <NotesItem text={note.text} id={note.id}/>
          </Link>
        ))}
      </NotesWrapper>
    </NotesCategoryContainer>
  );
};

export default NotesCategory;
