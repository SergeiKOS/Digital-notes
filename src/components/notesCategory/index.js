import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import SvgIcon from "../SvgIcon";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import GlobalContext from "../../GlobalContext";
import NotesCategoryName from "./notesCategoryName";
import {
  NotesCategoryContainer,
  NotesWrapper,
  CollapseCategory,
  AddNote,
} from "./NotesCategoryStyles";
import NotesItem from "./notesItem";

const NotesCategory = ({ category }) => {
  const { notes, setNotes } = useContext(GlobalContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  const handleCategoryCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleAddNote = () => {
    let notesCopy = [...notes];

    setNotes([
      ...notesCopy,
      {
        id: uuidv4(),
        category: category,
        noteHeader: "",
        text: "",
      },
    ]);
  };

  return (
    <NotesCategoryContainer>
      <div className="notes-category-container-header">
        <Tippy content={`${!isCollapsed ? "Collapse" : "Uncollapse"} category`}>
          <CollapseCategory onClick={handleCategoryCollapse} type="button">
            <SvgIcon size={"20px"}>
              {!isCollapsed ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </SvgIcon>
          </CollapseCategory>
        </Tippy>
        <NotesCategoryName category={category} />
        <Tippy content="Add note">
          <AddNote onClick={handleAddNote} aria-label="add note">
            +
          </AddNote>
        </Tippy>
      </div>
      {!isCollapsed && (
        <NotesWrapper>
          {getNotesFromCategory().map((note) => (
            <Link to={`/edit-note/${note.id}`} key={note.id}>
              <NotesItem notesItem={note} />
            </Link>
          ))}
        </NotesWrapper>
      )}
    </NotesCategoryContainer>
  );
};

export default NotesCategory;
