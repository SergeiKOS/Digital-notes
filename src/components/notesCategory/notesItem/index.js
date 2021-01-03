import { useContext } from "react";
import GlobalContext from "../../../GlobalContext";
import { NoteCard, NoteText, NoteHeader } from "./NoteStyles";
import { IoMdTrash } from "react-icons/io";
import SvgIcon from "../../SvgIcon";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { colors } from "../../../commonStyles/variables";
import { addDotsInTheEndOfLongText } from "../addDotsInTheEndOfLongText";
import { filterArrayById } from "../../../utils";

const NotesItem = ({ notesItem: { id, noteHeader, text } }) => {
  const { notes, setNotes } = useContext(GlobalContext);

  const textClean = text.replace(/(<([^>]+)>)/gi, "");

  const handleDelete = (e, id) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you would like to delete your note?"
    );
    if (confirmDelete) {
      setNotes(filterArrayById(notes, id));
    } else {
      return;
    }
  };

  return (
    <NoteCard>
      <div className="note-header-wrapper">
        <NoteHeader>{addDotsInTheEndOfLongText(noteHeader, 60)}</NoteHeader>
        <Tippy content="Delete note">
          <div
            className="trash-icon-wrapper"
            onClick={(e) => handleDelete(e, id)}
          >
            <SvgIcon color={colors.red} size={"20px"}>
              <IoMdTrash />
            </SvgIcon>
          </div>
        </Tippy>
      </div>
      <NoteText>{addDotsInTheEndOfLongText(textClean, 125)}</NoteText>
    </NoteCard>
  );
};

export default NotesItem;
