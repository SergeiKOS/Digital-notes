import { useContext, useState, useEffect, useRef } from "react";
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
import { Button } from "./ButtonStyles";
import { colors } from "../../commonStyles/variables";
import { filterArrayById } from "../../utils";
import { keyCodeChecker } from "./keyCodeChecker";
import useModal from "../../customHooks/useModal";
import Modal from "../modal";

const NoteEditor = () => {
  const [redirect, setRedirect] = useState(false);
  const [headerInput, setHeaderInput] = useState(true);
  const { notes, setNotes } = useContext(GlobalContext);
  const { visible, handleVisibility } = useModal();
  const { id } = useParams();
  const [currentNoteEditorState, setCurrentNoteEditorState] = useState(
    notes.filter((note) => note.id === id)[0]
  );
  const inputRef = useRef(null);
  const quillRef = useRef(null);
  const [isNotSave, setIsNoteSave] = useState(false);
  
  useEffect(() => {
    window.onbeforeunload = () => "";

    if (currentNoteEditorState?.text.length === 0) {
      quillRef.current.focus();
    }

    return () => (window.onbeforeunload = null);
  }, []);

  useEffect(() => {
    const keyCodeCheckerCallback = (e) => {
      if (keyCodeChecker(e)) handleSave();
    };
    window.addEventListener("keydown", keyCodeCheckerCallback);

    return () => window.removeEventListener("keydown", keyCodeCheckerCallback);
  }, [currentNoteEditorState]);

  const handleNoteHeaderChange = (e) => {
    setIsNoteSave(true);
    setCurrentNoteEditorState({
      ...currentNoteEditorState,
      noteHeader: e.target.value,
    });
  };

  const handleChange = (text) => {
    setIsNoteSave(true);
    setCurrentNoteEditorState({
      ...currentNoteEditorState,
      text,
    });
  };

  const handleDelete = () => {
    handleVisibility();
  };

  const handleDeleteConfirmation = (deleteConfirmation) => {
    handleVisibility();
    if (deleteConfirmation) {
      setIsNoteSave(false);
      setNotes(filterArrayById(notes, id));
      setRedirect(true);
    } else {
      return;
    }
  };

  const handleSave = () => {
    setIsNoteSave(false);
    let notesCopy = [...notes];

    notesCopy = filterArrayById(notesCopy, id);
    notesCopy.unshift(currentNoteEditorState);
    setNotes(notesCopy);
    setRedirect(true);
  };

  const handleEditHeaderName = () => {
    setHeaderInput(true);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleSubmit = () => {
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
            />
          </NoteHeaderForm>
        ) : (
          <NoteHeaderTitle onClick={handleEditHeaderName}>
            {currentNoteEditorState.noteHeader}
          </NoteHeaderTitle>
        )}

        <div className="custom-quill">
          <Prompt
            when={isNotSave}
            message="You have unsaved changes, are you sure you want to leave?"
          />
          <ReactQuill
            theme="snow"
            value={currentNoteEditorState.text}
            onChange={handleChange}
            ref={quillRef}
          />
          <div className="custom-quill-footer">
            <Tippy content="Delete note">
              <div className="trash-icon-wrapper" onClick={handleDelete}>
                <SvgIcon color={colors.red} size={"40px"}>
                  <IoMdTrash />
                </SvgIcon>
              </div>
            </Tippy>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
        <Modal isOpen={visible} onClose={handleVisibility}>
          <div>"Are you sure you would like to delete your note?"</div>
          <button type="button" onClick={() => handleDeleteConfirmation(true)}>
            OK
          </button>
          <button type="button" onClick={() => handleDeleteConfirmation(false)}>
            Cancel
          </button>
        </Modal>
      </>
    );
  }
};

export default NoteEditor;
