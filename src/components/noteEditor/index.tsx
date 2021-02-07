import { useContext, useState, useEffect, useRef } from "react";
import Note from "../../types/Note";
import GlobalContext from "../../GlobalContext";
import { useParams } from "react-router-dom";
import { Prompt } from "react-router";
import { Redirect } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CustomQuillStyles.css";
import { IoMdTrash } from "react-icons/io";
import SvgIcon from "../SvgIcon";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { NoteHeaderTitle, NoteHeaderForm, NoteHeaderInput } from "./NoteEditor";
import { SaveButton, DeleteButton } from "./ButtonStyles";
import { filterArrayById } from "../../utils";
import { keyCodeChecker } from "./keyCodeChecker";
import useModal from "../../customHooks/useModal";
import Modal from "../modal";
import { ModalMessage, ModalButtonsWrapper } from "../modal/ModalStyles";

const NoteEditor = () => {
  const [redirect, setRedirect] = useState(false);
  const [headerInput, setHeaderInput] = useState(true);
  const { notes, setNotes } = useContext(GlobalContext);
  const { visible, handleVisibility } = useModal();
  const { id } = useParams<{ id: string }>();
  const [currentNoteEditorState, setCurrentNoteEditorState] = useState(
    notes.filter((note: Note) => note.id === id)[0]
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<ReactQuill>(null);
  const [notSave, setNotSave] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true); // for ReactQuill because it invokes handleChange with first render

  useEffect((): (() => void) => {
    window.onbeforeunload = () => "";

    if (currentNoteEditorState?.text.length === 0) {
      quillRef.current?.focus();
    }

    return () => (window.onbeforeunload = null);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const keyCodeCheckerCallback = (e: KeyboardEvent) => {
      if (keyCodeChecker(e)) handleSave();
    };
    window.addEventListener("keydown", keyCodeCheckerCallback);

    return () => window.removeEventListener("keydown", keyCodeCheckerCallback);
  }, [currentNoteEditorState]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleNoteHeaderChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNotSave(true);
    setCurrentNoteEditorState({
      ...currentNoteEditorState,
      noteHeader: e.target.value,
    });
  };

  const handleChange = (text: string): void => {
    if (!initialLoading) {
      setNotSave(true);
    } else {
      setInitialLoading(false);
    }

    setCurrentNoteEditorState({
      ...currentNoteEditorState,
      text,
    });
  };

  const handleDelete = (): void => {
    handleVisibility();
  };

  const handleDeleteConfirmation = (deleteConfirmation: boolean): void => {
    handleVisibility();
    if (deleteConfirmation) {
      setNotSave(false);
      setNotes(filterArrayById(notes, id));
      setRedirect(true);
    } else {
      return;
    }
  };

  const handleSave = (): void => {
    setNotSave(false);
    let notesCopy = [...notes];

    notesCopy = filterArrayById(notesCopy, id);
    notesCopy.unshift(currentNoteEditorState);
    setNotes(notesCopy);
    setRedirect(true);
  };

  const handleEditHeaderName = (): void => {
    setHeaderInput(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSubmit = (): void => {
    setHeaderInput(false);
  };

  if (redirect) {
    return <Redirect to="/" />;
  } else if (!currentNoteEditorState) {
    return <Redirect to="/not-found" />;
  } else {
    return (
      <>
        {headerInput ? (
          <NoteHeaderForm onSubmit={handleSubmit}>
            <NoteHeaderInput
              value={currentNoteEditorState.noteHeader}
              onChange={handleNoteHeaderChange}
              onBlur={handleSubmit}
              ref={inputRef}
              placeholder="Title..."
            />
          </NoteHeaderForm>
        ) : (
          <NoteHeaderTitle onClick={handleEditHeaderName}>
            {currentNoteEditorState.noteHeader}
          </NoteHeaderTitle>
        )}

        <div className="custom-quill">
          <Prompt
            when={notSave}
            message="You have unsaved changes, are you sure you want to leave?"
          />
          <ReactQuill
            theme="snow"
            defaultValue={currentNoteEditorState.text}
            onChange={handleChange}
            ref={quillRef}
            placeholder="Text..."
          />
          <div className="custom-quill-footer">
            <Tippy content="Delete note">
              <DeleteButton onClick={handleDelete} type="button">
                <SvgIcon size={"40px"}>
                  <IoMdTrash className="trash-icon" />
                </SvgIcon>
              </DeleteButton>
            </Tippy>
            <Tippy content="Ctrl + Shift + S">
              <SaveButton onClick={handleSave} type="button">
                Save
              </SaveButton>
            </Tippy>
          </div>
        </div>
        <Modal isOpen={visible} onClose={handleVisibility}>
          <ModalMessage>
            Are you sure you would like to delete your note?
          </ModalMessage>
          <ModalButtonsWrapper>
            <button
              className="modal-buttons-wrapper--confirm"
              type="button"
              onClick={() => handleDeleteConfirmation(true)}
            >
              OK
            </button>
            <button
              className="modal-buttons-wrapper--cancel"
              type="button"
              autoFocus={true}
              onClick={() => handleDeleteConfirmation(false)}
            >
              Cancel
            </button>
          </ModalButtonsWrapper>
        </Modal>
      </>
    );
  }
};

export default NoteEditor;
