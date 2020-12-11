import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CustomQuillStyles.css";

const Quill = ({value, id, onChange}) => {
  return (
    <div className="custom-quill">
      <ReactQuill theme="snow" value={value} onChange={(e, delta)=>onChange(e, delta, id)} />
    </div>
  );
};

export default Quill;
