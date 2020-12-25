import { useContext } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CustomQuillStyles.css";

// import { IconContext } from "react-icons";
// import { IoMdTrash } from "react-icons/io";
// import {colors} from '../../../commonStyles/variables'
import GlobalContext from "../../GlobalContext";

const NoteEditor = () => {
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
    setNotes(notesCopy);
  };

  return (
    <div className="custom-quill">
      <ReactQuill
        theme="snow"
        value={getNote().text}
        onChange={(e) => handleChange(e)}
      />
      {/* <div className="trash-icon-wrapper" onClick={() => onDelete(id)}> */}
      {/* <IconContext.Provider value={{ color: colors.lightDark, size: "20px" }}>
      <IoMdTrash />
    </IconContext.Provider> */}
      {/* </div> */}
    </div>
  );
};

export default NoteEditor;
