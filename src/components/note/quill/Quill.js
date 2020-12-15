import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CustomQuillStyles.css";
import {colors} from '../../../commonStyles/variables'

import { IconContext } from "react-icons";
import { IoMdTrash } from "react-icons/io";

const Quill = ({ value, id, onChange, onDelete }) => {
  return (
    <div className="custom-quill">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(e, delta) => onChange(e, delta, id)}
      />
      <div className="trash-icon-wrapper" onClick={() => onDelete(id)}>
        <IconContext.Provider value={{ color: colors.lightDark, size: "20px" }}>
          <IoMdTrash />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Quill;
