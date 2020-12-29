import { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../../GlobalContext";
import { IoMdAdd } from "react-icons/io";
import SvgIcon from "../SvgIcon";
import { colors } from "../../commonStyles/variables";
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
      <AddNote onClick={handleAddNote} aria-label="add note">
        <SvgIcon color={colors.dark} size={"25px"}>
          <IoMdAdd />
        </SvgIcon>
      </AddNote>
      <NotesWrapper>
        {getNotesFromCategory().map((note) => (
          <Link to={`/edit-note/${note.id}`} key={note.id}>
            <NotesItem text={note.text} id={note.id} />
          </Link>
        ))}
      </NotesWrapper>
    </NotesCategoryContainer>
  );
};

export default NotesCategory;
