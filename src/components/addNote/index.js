import React from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../../GlobalContext";
import { AddNoteBtn } from "./AddNoteBtn";

const AddNote = () => {
  const { notes, setNotes } = useContext(GlobalContext);

  const handleAddNote = () => {
    setNotes([
      ...notes,
      {
        id: uuidv4(),
        title: `Note ${notes.length + 1}`,
        text: "",
      },
    ]);
  };

  return <AddNoteBtn onClick={handleAddNote}>+</AddNoteBtn>;
};

export default AddNote;
