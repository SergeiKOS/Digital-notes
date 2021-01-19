import React, { useState, useContext, useRef } from "react";
import GlobalContext from "../../../GlobalContext";
import { IoMdCreate } from "react-icons/io";
import SvgIcon from "../../SvgIcon";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { colors } from "../../../commonStyles/variables";
import {
  NoteHeaderWrapper,
  NotesHeader,
  NotesHeaderForm,
  NotesHeaderInput,
  NotesHeaderEdit,
} from "./NotesCategoryName";
import { addDotsInTheEndOfLongText } from "../addDotsInTheEndOfLongText";

const NotesCategoryName = ({ category }) => {
  const [userInputCategory, setUserInputCategory] = useState(category);
  const [headerInput, setHeaderInput] = useState(false);
  const { notes, setNotes } = useContext(GlobalContext);

  const inputRef = useRef(null);

  const handleEditCategoryName = () => {
    setHeaderInput(true);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleCategoryChange = (e) => {
    setUserInputCategory(e.target.value);
  };

  const handleSubmit = () => {
    setHeaderInput(false);
    setNotes(
      notes.map((note) =>
        note.category === category
          ? { ...note, category: userInputCategory }
          : note
      )
    );
  };

  return (
    <NoteHeaderWrapper onClick={handleEditCategoryName}>
      {headerInput ? (
        <NotesHeaderForm onSubmit={handleSubmit}>
          <NotesHeaderInput
            value={userInputCategory}
            onChange={handleCategoryChange}
            onBlur={handleSubmit}
            ref={inputRef}
          />
        </NotesHeaderForm>
      ) : (
        <NotesHeader>
          {addDotsInTheEndOfLongText(userInputCategory, 30)}
        </NotesHeader>
      )}
      <Tippy content="Edit category">
        <NotesHeaderEdit
          onClick={handleEditCategoryName}
          aria-label="edit category"
        >
          {headerInput ? (
            ""
          ) : (
            <SvgIcon color={colors.dark} size={"20px"}>
              <IoMdCreate className="edit-icon" />
            </SvgIcon>
          )}
        </NotesHeaderEdit>
      </Tippy>
    </NoteHeaderWrapper>
  );
};

export default NotesCategoryName;
