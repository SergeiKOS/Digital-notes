import React, { useState } from "react";
import { useContext } from "react";

import { v4 as uuidv4 } from "uuid";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import GlobalContext from "../../GlobalContext";
import { AddCategoryBtn } from "./AddCategoryBtn";
import useModal from "../../customHooks/useModal";
import Modal from "../modal";
import {
  ModalInput,
  ModalInputError,
  ModalButtonConfirm,
} from "../modal/ModalStyles";

const AddCategory = () => {
  const { notes, setNotes } = useContext(GlobalContext);
  const { visible, handleVisibility } = useModal();
  const [userInputCategory, setUserInputCategory] = useState("");
  const [sameNameError, setSameNameError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInputCategory(e.target.value);
  };

  const handleSubmitCategory = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let notesCopy = [...notes];

    setSameNameError(false);

    const ifSameTitle = notesCopy.find(
      (note) => note.category === userInputCategory
    );

    if (!ifSameTitle) {
      handleVisibility();
      setNotes([
        ...notesCopy,
        {
          id: uuidv4(),
          category: userInputCategory,
          noteHeader: "",
          text: "",
          stats: {
            created: "",
            modified: "",
            numberOfLetters: "0",
          },
        },
      ]);
      setUserInputCategory("");
    } else {
      setSameNameError(true);
    }
  };

  const handleClose = (): void => {
    handleVisibility();
    setUserInputCategory("");
  };

  return (
    <>
      <Tippy content="Add category">
        <AddCategoryBtn onClick={handleVisibility} aria-label="add category">
          +
        </AddCategoryBtn>
      </Tippy>
      <Modal isOpen={visible} onClose={handleClose}>
        <form onSubmit={handleSubmitCategory}>
          <label htmlFor="category-name">Enter name of the category:</label>
          <ModalInput
            autoFocus={true}
            type="text"
            id="category-name"
            value={userInputCategory}
            onChange={handleInputChange}
            autoComplete="off"
          />{" "}
          {sameNameError && (
            <ModalInputError>Names can't be the same</ModalInputError>
          )}
          <ModalButtonConfirm type="submit">Confirm name</ModalButtonConfirm>
        </form>
      </Modal>
    </>
  );
};

export default AddCategory;
