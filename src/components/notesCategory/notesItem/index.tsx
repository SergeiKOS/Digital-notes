import { useContext } from "react";
import GlobalContext from "../../../GlobalContext";
import { NoteCard, NoteText, NoteHeader } from "./NoteStyles";
import { IoMdTrash } from "react-icons/io";
import SvgIcon from "../../SvgIcon";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { addDotsInTheEndOfLongText } from "../addDotsInTheEndOfLongText";
import { DeleteButton } from "../../noteEditor/ButtonStyles";
import { filterArrayById } from "../../../utils";
import useModal from "../../../customHooks/useModal";
import Modal from "../../modal";
import { ModalMessage, ModalButtonsWrapper } from "../../modal/ModalStyles";

interface NoteItem {
  notesItem: {
    id: string;
    noteHeader: string;
    text: string;
  };
}

const NotesItem = ({ notesItem: { id, noteHeader, text } }: NoteItem) => {
  const { notes, setNotes } = useContext(GlobalContext);
  const { visible, handleVisibility } = useModal();

  const textClean = text.replace(/(<([^>]+)>)/gi, "");

  const toggleModal = (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    handleVisibility();
  };

  const handleDeleteConfirmation = (
    e: React.MouseEvent<HTMLButtonElement>,
    deleteConfirmation: boolean
  ) => {
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
            <DeleteButton
              className="trash-icon-wrapper"
              onClick={toggleModal}
              aria-label="Delete note"
            >
              <SvgIcon size={"20px"}>
                <IoMdTrash className="trash-icon" />
              </SvgIcon>
            </DeleteButton>
          </Tippy>
        </div>
        <NoteText noteHeader={noteHeader} textClean={textClean}>
          {addDotsInTheEndOfLongText(textClean, 125)}
        </NoteText>
      </NoteCard>
      <Modal isOpen={visible} onClose={toggleModal}>
        <ModalMessage>
          Are you sure you would like to delete your note?
        </ModalMessage>
        <ModalButtonsWrapper>
          <button
            type="button"
            onClick={(e) => handleDeleteConfirmation(e, true)}
            className="modal-buttons-wrapper--confirm"
          >
            OK
          </button>
          <button
            type="button"
            onClick={(e) => handleDeleteConfirmation(e, false)}
            className="modal-buttons-wrapper--cancel"
            autoFocus={true}
          >
            Cancel
          </button>
        </ModalButtonsWrapper>
      </Modal>
    </>
  );
};

export default NotesItem;
