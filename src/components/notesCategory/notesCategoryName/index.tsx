import React, { useState, useContext, useRef } from "react";

import { IoMdCreate } from "react-icons/io";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Note from "../../../types/Note";
import GlobalContext from "../../../GlobalContext";
import SvgIcon from "../../SvgIcon";
import { colors } from "../../../commonStyles/variables";
import {
  NotesHeaderWrapper,
  NotesHeader,
  NotesHeaderForm,
  NotesHeaderInput,
  NotesHeaderError,
  NotesHeaderEdit,
} from "./NotesCategoryName";
import { addDotsInTheEndOfLongText } from "../addDotsInTheEndOfLongText";

const NotesCategoryName = ({ category }: any) => {
  const [userInputCategory, setUserInputCategory] = useState(category);
  const [headerInput, setHeaderInput] = useState(false);
  const { notes, setNotes } = useContext(GlobalContext);
  const [sameNameError, setSameNameError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditCategoryName = () => {
    setHeaderInput(true);
    setTimeout(() => inputRef.current!.focus(), 0);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputCategory(e.target.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    let ifSameTitle;
    if (category === userInputCategory) {
      ifSameTitle = false;
    } else {
      ifSameTitle = notes.find(
        (note: Note) => note.category === userInputCategory
      );
    }

    if (!ifSameTitle) {
      setHeaderInput(false);
      setSameNameError(false);
      setNotes(
        notes.map((note: Note) =>
          note.category === category
            ? { ...note, category: userInputCategory }
            : note
        )
      );
    } else {
      setSameNameError(true);
      inputRef.current!.focus();
    }
  };

  return (
    <>
      <NotesHeaderWrapper onClick={handleEditCategoryName}>
        {headerInput ? (
          <NotesHeaderForm onSubmit={handleSubmit}>
            <NotesHeaderInput
              value={userInputCategory}
              onChange={handleCategoryChange}
              onBlur={handleSubmit}
              ref={inputRef}
            />
            {sameNameError && (
              <NotesHeaderError>Names can't be the same</NotesHeaderError>
            )}
          </NotesHeaderForm>
        ) : (
          <NotesHeader>
            {addDotsInTheEndOfLongText(userInputCategory, 30)}
          </NotesHeader>
        )}
      </NotesHeaderWrapper>
      {!headerInput && (
        <Tippy content="Edit category">
          <NotesHeaderEdit
            onClick={handleEditCategoryName}
            aria-label="edit category"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <SvgIcon color={colors.dark} size={"20px"}>
              <IoMdCreate className="edit-icon" />
            </SvgIcon>
          </NotesHeaderEdit>
        </Tippy>
      )}
    </>
  );
};

export default NotesCategoryName;
