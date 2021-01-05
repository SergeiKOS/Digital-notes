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
import useModal from "../../../customHooks/useModal";
import Modal from "../../modal";

const NotesItem = ({ notesItem: { id, noteHeader, text } }) => {
  const { notes, setNotes } = useContext(GlobalContext);
  const { visible, handleVisibility } = useModal();

  const textClean = text.replace(/(<([^>]+)>)/gi, "");

  const toggleModal = (e) => {
    e.preventDefault();
    handleVisibility();
  };

  const handleDeleteConfirmation = (e, deleteConfirmation) => {
    toggleModal(e);
    if (deleteConfirmation) {
      setNotes(filterArrayById(notes, id));
    } else {
      return;
    }
  };

  return (
    <>
      <NoteCard>
        <div className="note-header-wrapper">
          <NoteHeader>{addDotsInTheEndOfLongText(noteHeader, 60)}</NoteHeader>
          <Tippy content="Delete note">
            <div className="trash-icon-wrapper" onClick={toggleModal}>
              <SvgIcon color={colors.red} size={"20px"}>
                <IoMdTrash />
              </SvgIcon>
            </div>
          </Tippy>
        </div>
        <NoteText>{addDotsInTheEndOfLongText(textClean, 125)}</NoteText>
      </NoteCard>
      <Modal isOpen={visible} onClose={toggleModal}>
        <div>"Are you sure you would like to delete your note?"</div>
        <button
          type="button"
          onClick={(e) => handleDeleteConfirmation(e, true)}
        >
          OK
        </button>
        <button
          type="button"
          onClick={(e) => handleDeleteConfirmation(e, false)}
        >
          Cancel
        </button>
      </Modal>
    </>
  );
};

export default NotesItem;
