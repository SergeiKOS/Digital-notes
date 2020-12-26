import { NoteCard } from "./NoteStyles";
import { IconContext } from "react-icons";
import { IoMdTrash } from "react-icons/io";
import { colors } from "../../../commonStyles/variables";

const Note = ({ text, id }) => {
  const handleDelete = (id) => {
    console.log("deleted", id);
  };
  return (
    <NoteCard>
      <div>{text.replace(/(<([^>]+)>)/gi, "")}</div>
      <div className="trash-icon-wrapper" onClick={() => handleDelete(id)}>
        <IconContext.Provider value={{ color: colors.lightDark, size: "20px" }}>
          <IoMdTrash />
        </IconContext.Provider>
      </div>
    </NoteCard>
  );
};

export default Note;
