import { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../../GlobalContext";
import NotesCategoryName from "./notesCategoryName";
import {
  NotesCategoryContainer,
  NotesWrapper,
  AddNote,
} from "./NotesCategoryStyles";
import NotesItem from "./notesItem";

const NotesCategory = ({ category }) => {
  const { notes, setNotes } = useContext(GlobalContext);

  const getNotesFromCategory = () => {
    let notesCopy = [...notes];
    notesCopy = notesCopy.filter((note) => {
      if (note.category === category) {
        return {
          ...note,
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
        noteHeader: "",
        text: "",
      },
    ]);
  };

  return (
    <NotesCategoryContainer>
      <div className="notes-category-container-header">
        <NotesCategoryName category={category} />
        <AddNote onClick={handleAddNote} aria-label="add note">
          +
        </AddNote>
      </div>
      <NotesWrapper>
        {getNotesFromCategory().map((note) => (
          <Link to={`/edit-note/${note.id}`} key={note.id}>
            <NotesItem notesItem={note} />
          </Link>
        ))}
      </NotesWrapper>
    </NotesCategoryContainer>
  );
};

export default NotesCategory;
