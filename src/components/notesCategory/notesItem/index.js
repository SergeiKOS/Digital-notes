import { useContext } from "react";
import GlobalContext from "../../../GlobalContext";
import { NoteCard } from "./NoteStyles";
import { IconContext } from "react-icons";
import { IoMdTrash } from "react-icons/io";
import { colors } from "../../../commonStyles/variables";

const Note = ({ text, id }) => {
  const { notes, setNotes } = useContext(GlobalContext);

  const textClean = text.replace(/(<([^>]+)>)/gi, "");

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

  return (
    <NoteCard>
      <div>{textClean}</div>
      <div className="trash-icon-wrapper" onClick={(e) => handleDelete(e, id)}>
        <IconContext.Provider value={{ color: colors.red, size: "20px" }}>
          <IoMdTrash />
        </IconContext.Provider>
      </div>
    </NoteCard>
  );
};

export default Note;
