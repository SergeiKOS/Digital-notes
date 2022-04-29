import React, { useContext, useState, useEffect, useRef } from "react";

import { useParams, Redirect } from "react-router-dom";
import { Prompt } from "react-router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoMdTrash } from "react-icons/io";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Note from "../../types/Note";
import GlobalContext from "../../GlobalContext";
import "./CustomQuillStyles.css";
import SvgIcon from "../SvgIcon";
import { NoteHeaderTitle, NoteHeaderForm, NoteHeaderInput } from "./NoteEditor";
import { SaveButton, DeleteButton } from "./ButtonStyles";
import { filterArrayById } from "../../utils";
import { keyCodeChecker } from "./keyCodeChecker";
import useModal from "../../customHooks/useModal";
import Modal from "../modal";
import { ModalMessage, ModalButtonsWrapper } from "../modal/ModalStyles";
import { getDate } from "./getDate";
import { putAriaLabelOnQuillToolbar } from "./putAriaLabelOnQuillToolbar";

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
  const saveRef = useRef<HTMLButtonElement>(null);
  const [notSave, setNotSave] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true); // for ReactQuill because it invokes handleChange with first render
  const [flagForStats, setFlagForStats] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const keyCodeCheckerCallback = (e: KeyboardEvent) => {
      if (keyCodeChecker(e)) handleSave();
    };
    window.addEventListener("keydown", keyCodeCheckerCallback);

    return () => window.removeEventListener("keydown", keyCodeCheckerCallback);
  }, [currentNoteEditorState]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const keyDownQuillCallback = (e: KeyboardEvent) => {
      if (e.key === "Tab") quillRef.current?.blur();
    };

    window.addEventListener("keydown", keyDownQuillCallback);
    return () => {
      window.removeEventListener("keydown", keyDownQuillCallback);
    };
  }, []);

  useEffect(() => {
    putAriaLabelOnQuillToolbar();
  }, []);

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

  const getLettersAmount = (): number =>
    quillRef.current?.getEditor().getContents().length()! - 1;

  useEffect(() => {
    if (flagForStats) {
      setNotSave(false);
      let notesCopy = [...notes];

      notesCopy = filterArrayById(notesCopy, id);
      notesCopy.unshift(currentNoteEditorState);
      setNotes(notesCopy);
      setFlagForStats(false);
    }
  }, [currentNoteEditorState]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSave = (): void => {
    setFlagForStats(true);

    setCurrentNoteEditorState({
      ...currentNoteEditorState,
      stats: {
        created: getDate(currentNoteEditorState.stats.created),
        modified: {
          lastTime: getDate("getLastDate"),
          amountOfTimes:
            currentNoteEditorState.stats.modified.amountOfTimes !== null ||
            currentNoteEditorState.stats.modified.amountOfTimes === 0
              ? currentNoteEditorState.stats.modified.amountOfTimes + 1
              : 0,
        },
        numberOfLetters: getLettersAmount(),
      },
    });
    setRedirect(true);
  };

  const handleEditHeaderName = (): void => {
    setHeaderInput(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSubmit = (): void => {
    currentNoteEditorState.noteHeader.length !== 0 && setHeaderInput(false);
  };

  if (redirect) {
    return <Redirect to="/app" />;
  } else if (!currentNoteEditorState) {
    return <Redirect to="/not-found" />;
  } else {
    return (
      <>
        {headerInput ? (
          <>
            <NoteHeaderTitle
              onClick={handleEditHeaderName}
              className="visually-hidden"
            >
              {currentNoteEditorState.noteHeader}
            </NoteHeaderTitle>
            <NoteHeaderForm onSubmit={handleSubmit}>
              <NoteHeaderInput
                value={currentNoteEditorState.noteHeader}
                onChange={handleNoteHeaderChange}
                onBlur={handleSubmit}
                ref={inputRef}
                placeholder="Title..."
              />
            </NoteHeaderForm>
          </>
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
          <section className="note-stats">
            Created: {currentNoteEditorState.stats.created} | Modified:{" "}
            {currentNoteEditorState.stats.modified.amountOfTimes || 0} times,
            Last time: {currentNoteEditorState.stats.modified.lastTime} | Number
            of letters:
            {currentNoteEditorState.stats.numberOfLetters}
          </section>
          <div className="custom-quill-footer">
            <Tippy content="Ctrl + Shift + s">
              <SaveButton onClick={handleSave} ref={saveRef} type="button">
                Save
              </SaveButton>
            </Tippy>
            <Tippy content="Delete note">
              <DeleteButton
                onClick={handleDelete}
                type="button"
                aria-label="Delete note"
              >
                <SvgIcon size={"40px"}>
                  <IoMdTrash className="trash-icon" />
                </SvgIcon>
              </DeleteButton>
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
