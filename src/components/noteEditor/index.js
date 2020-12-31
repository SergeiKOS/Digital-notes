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
import { NoteHeaderTitle, NoteHeaderForm, NoteHeaderInput } from "./NoteEditor";
import { Button } from "./ButtonStyles";
import { colors } from "../../commonStyles/variables";

const NoteEditor = () => {
  const [redirect, setRedirect] = useState(false);
  const [headerInput, setHeaderInput] = useState(true);
  const { notes, setNotes } = useContext(GlobalContext);
  const { id } = useParams();
  const [currentNoteEditorState, setCurrentNoteEditorState] = useState(
    notes.filter((note) => note.id === id)[0]
  );
  const inputRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    window.onbeforeunload = () => "";

    if (currentNoteEditorState.text.length === 0) {
      quillRef.current.focus();
    }

    return () => (window.onbeforeunload = null);
  }, []);

  // const getNote = () => {
  //   return currentNoteEditorState.filter((note) => note.id === id)[0];
  // };

  const handleChange = (text) => {
    setCurrentNoteEditorState({ ...currentNoteEditorState, text });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you would like to delete your note?"
    );
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
      setRedirect(true);
    } else {
      return;
    }
  };

  const handleSave = () => {
    setNotes(
      notes.map((note) => (note.id === id ? currentNoteEditorState : note))
    );
    setRedirect(true);
  };

  const handleEditHeaderName = () => {
    setHeaderInput(true);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleNoteHeaderChange = (e) => {
    setCurrentNoteEditorState({
      ...currentNoteEditorState,
      noteHeader: e.target.value,
    });
  };

  const handleSubmit = () => {
    setHeaderInput(false);
  };

  if (redirect) {
    return <Redirect to="/" />;
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
            when={true}
            message="You have unsaved changes, are you sure you want to leave?"
          />
          <ReactQuill
            theme="snow"
            value={currentNoteEditorState.text}
            onChange={handleChange}
            ref={quillRef}
          />
          <div className="custom-quill-footer">
            <div
              className="trash-icon-wrapper"
              onClick={(e) => handleDelete(e, id)}
            >
              <SvgIcon color={colors.red} size={"40px"}>
                <IoMdTrash />
              </SvgIcon>
            </div>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </>
    );
  }
};

export default NoteEditor;
