import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CustomQuillStyles.css";

const Quill = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("userInput"));
  }, []);

  useEffect(() => {
    localStorage.setItem("userInput", value);
  }, [value]);

  return (
    <div className="custom-quill">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default Quill;
