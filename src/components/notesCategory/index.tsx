import { useContext } from "react";

import { v4 as uuidv4 } from "uuid";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import GlobalContext from "../../GlobalContext";
import NotesCategoryName from "./notesCategoryName";
import {
  NotesCategoryContainer,
  NotesWrapper,
  AddNote,
  NotesItemLink,
} from "./NotesCategoryStyles";
import NotesItem from "./notesItem";

const NotesCategory = ({ category }: any) => {
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
    setNotes([
      ...notes,
      {
        id: uuidv4(),
        category: category,
        noteHeader: "",
        text: "",
        stats: {
          created: "",
          modified: {
            lastTime: "",
            amountOfTimes: null,
          },
          numberOfLetters: "0",
        },
      },
    ]);
  };

  return (
    <NotesCategoryContainer>
      <div className="notes-category-container-header">
        <NotesCategoryName category={category} />
        <Tippy content="Add note">
          <AddNote onClick={handleAddNote} aria-label="add note">
            +
          </AddNote>
        </Tippy>
      </div>
      <NotesWrapper>
        {getNotesFromCategory().map((note) => (
          <NotesItemLink to={`/edit-note/${note.id}`} key={note.id}>
            <NotesItem notesItem={note} />
          </NotesItemLink>
        ))}
      </NotesWrapper>
    </NotesCategoryContainer>
  );
};

export default NotesCategory;
