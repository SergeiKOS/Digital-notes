import React from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import GlobalContext from "../../GlobalContext";
import { AddCategoryBtn } from "./AddCategoryBtn";

const AddNote = () => {
  const { notes, setNotes } = useContext(GlobalContext);

  const handleAddCategory = () => {
    const categoryName = window.prompt("Enter name of the category.", "");
    let notesCopy = [...notes];

    setNotes([
      ...notesCopy,
      {
        id: uuidv4(),
        category: categoryName,
        text: "",
      },
    ]);
  };


  return <AddCategoryBtn onClick={handleAddCategory} aria-label="send email">+</AddCategoryBtn>;
};

export default AddNote;
