import React from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import GlobalContext from "../../GlobalContext";
import { AddCategoryBtn } from "./AddCategoryBtn";

const AddCategory = () => {
  const { notes, setNotes } = useContext(GlobalContext);

  const handleAddCategory = () => {
    const categoryName = window.prompt("Enter name of the category.", "");
    let notesCopy = [...notes];

    setNotes([
      ...notesCopy,
      {
        id: uuidv4(),
        category: categoryName,
        noteHeader: "",
        text: "",
      },
    ]);
  };

  return (
    <Tippy content="Add category">
      <AddCategoryBtn onClick={handleAddCategory} aria-label="add category">
        +
      </AddCategoryBtn>
    </Tippy>
  );
};

export default AddCategory;
