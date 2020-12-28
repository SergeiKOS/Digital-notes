import { useContext, useState, useEffect } from "react";
import GlobalContext from "../../GlobalContext";
import { useParams, useHistory } from "react-router-dom";
import { Prompt } from "react-router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CustomQuillStyles.css";
import { IconContext } from "react-icons";
import { IoMdTrash } from "react-icons/io";
import { Button } from "./ButtonStyles";
import { colors } from "../../commonStyles/variables";

const NoteEditor = () => {
  const [isChanged, setIsChanged] = useState(false);
  const { notes, setNotes } = useContext(GlobalContext);
  const [currentNoteEditorState, setCurrentNoteEditorState] = useState(notes);
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    window.onbeforeunload = () => (isChanged ? "" : null);
  }, [isChanged]);

  useEffect(() => {
    return () => (window.onbeforeunload = null);
  }, []);

  const getNote = () => {
    return notes.filter((note) => note.id === id)[0];
  };

  const handleChange = (e) => {
    let notesCopy = [...notes];
    notesCopy = notesCopy.map((note) => {
      if (note.id === id) {
        note.text = e;
        return note;
      } else {
        return note;
      }
    });
    setIsChanged(true);
    setCurrentNoteEditorState(notesCopy);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you would like to delete your note?"
    );
    if (confirmDelete) {
      setIsChanged(false);
      setTimeout(() => history.push("/"), 0);
      setTimeout(() => setNotes(notes.filter((note) => note.id !== id)), 0);
    } else {
      return;
    }
  };

  const handleSave = () => {
    setIsChanged(false);
    setNotes(currentNoteEditorState);

    setTimeout(() => history.push("/"), 0);
  };

  return (
    <div className="custom-quill">
      <Prompt
        when={isChanged}
        message="You have unsaved changes, are you sure you want to leave?"
      />
      <ReactQuill
        theme="snow"
        value={getNote().text}
        onChange={(e) => handleChange(e)}
      />
      <div className="custom-quill-footer">
        <div
          className="trash-icon-wrapper"
          onClick={(e) => handleDelete(e, id)}
        >
          <IconContext.Provider value={{ color: colors.red, size: "40px" }}>
            <IoMdTrash />
          </IconContext.Provider>
        </div>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default NoteEditor;
