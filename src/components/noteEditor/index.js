import { useContext, useState } from "react";
import GlobalContext from "../../GlobalContext";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CustomQuillStyles.css";
import { IconContext } from "react-icons";
import { IoMdTrash } from "react-icons/io";
import { Button } from "./ButtonStyles";
import { colors } from "../../commonStyles/variables";


const NoteEditor = () => {
  const [isSaves, setIsSaved] = useState(true)
  const { notes, setNotes } = useContext(GlobalContext);
  const { id } = useParams();

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
    setIsSaved(false);
    setNotes(notesCopy);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you would like to delete your note?"
    );
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    } else {
      return;
    }
  };

  const handleSave = () => {
    setIsSaved(true);
  }

  return (
    <div className="custom-quill">
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
