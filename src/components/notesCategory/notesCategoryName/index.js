import React, { useState, useContext, useRef } from "react";
import GlobalContext from "../../../GlobalContext";
import { IoMdCreate } from "react-icons/io";
import SvgIcon from "../../SvgIcon";
import { colors } from "../../../commonStyles/variables";
import {
  NoteHeaderWrapper,
  NotesHeader,
  NotesHeaderInput,
  NotesHeaderEdit,
} from "./NotesCategoryName";

const NotesCategoryName = ({ category }) => {
  const [headerInput, setHeaderInput] = useState(false);
  const [test, settest] = useState('0');
  const { notes, setNotes } = useContext(GlobalContext);

  const inputRef = useRef(null)

  const handleEditCategoryName = () => {
    setHeaderInput(true)
    settest(1)
    setTimeout(()=>inputRef.current.focus(), 0)
    // let newCategoryName = prompt("Type new category name", category);

    // if (typeof newCategoryName !== "string") {
    //   return;
    // }

    // let notesCopy = [...notes];
    // notesCopy = notesCopy.map((note) => {
    //   if (note.category === category) {
    //     note.category = newCategoryName;
    //     return note;
    //   } else {
    //     return note;
    //   }
    // });

    // setNotes(notesCopy);
  };

  const handleFocusOut = () => {
    setHeaderInput(false)
  }

  return (
    <NoteHeaderWrapper>
      {headerInput ? (
        <NotesHeaderInput focusout={handleFocusOut} ref={inputRef}/>
      ) : (
        <NotesHeader>{category}</NotesHeader>
      )}
      <NotesHeaderEdit
        onClick={handleEditCategoryName}
        aria-label="edit category"
      >
        <SvgIcon color={colors.dark} size={"20px"}>
          <IoMdCreate />
        </SvgIcon>
      </NotesHeaderEdit>
    </NoteHeaderWrapper>
  );
};

export default NotesCategoryName;
