import React, { useContext } from "react";
import GlobalContext from "../../../GlobalContext";
import {
  NoteHeaderWrapper,
  NotesHeader,
  NotesHeaderEdit,
} from "./NotesCategoryName";

const NotesCategoryName = ({ category }) => {
  const { notes, setNotes } = useContext(GlobalContext);

  const handleEditCategoryName = () => {
    let newCategoryName = prompt("Type new category name", category);

    if (typeof newCategoryName !== "string") {
      return;
    }

    let notesCopy = [...notes];
    notesCopy = notesCopy.map((note) => {
      if (note.category === category) {
        note.category = newCategoryName;
        return note;
      } else {
        return note;
      }
    });

    setNotes(notesCopy);
  };

  return (
    <NoteHeaderWrapper>
      <NotesHeader>{category}</NotesHeader>
      <NotesHeaderEdit
        onClick={handleEditCategoryName}
        aria-label="edit category"
      >
        edit svg
      </NotesHeaderEdit>
    </NoteHeaderWrapper>
  );
};

export default NotesCategoryName;
