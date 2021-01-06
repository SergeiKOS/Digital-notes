import React, { useState, useRef } from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import GlobalContext from "../../GlobalContext";
import { AddCategoryBtn } from "./AddCategoryBtn";
import useModal from "../../customHooks/useModal";
import Modal from "../modal";
import {ModalInput, ModalButtonConfirm} from "../modal/ModalStyles";

const AddCategory = () => {
  const { notes, setNotes } = useContext(GlobalContext);
  const { visible, handleVisibility } = useModal();
  const [userCategoryValue, serUserCategoryValue] = useState("");

  const handleInputChange = (e) => {
    serUserCategoryValue(e.target.value);
  };

  const handleSubmitCategory = () => {
    let notesCopy = [...notes];

    setNotes([
      ...notesCopy,
      {
        id: uuidv4(),
        category: userCategoryValue,
        noteHeader: "",
        text: "",
      },
    ]);
  };

  return (
    <>
      <Tippy content="Add category">
        <AddCategoryBtn onClick={handleVisibility} aria-label="add category">
          +
        </AddCategoryBtn>
      </Tippy>
      <Modal isOpen={visible} onClose={handleVisibility}>
        <form onSubmit={handleSubmitCategory}>
          <label htmlFor="category-name">Enter name of the category:</label>
          <ModalInput
            autoFocus={true}
            type="text"
            id="category-name"
            value={userCategoryValue}
            onChange={handleInputChange}
          />
          <ModalButtonConfirm type="submit">Confirm name</ModalButtonConfirm>
        </form>
      </Modal>
    </>
  );
};

export default AddCategory;
