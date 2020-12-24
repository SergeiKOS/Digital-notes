import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../../../GlobalContext";
// import NoteTitle from './noteTitle/NoteTitle'
import Quill from "./quill/Quill";

const NoteEditor = () => {
  const { notes, setNotes } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("userInput"));
    if (notes) setNotes(JSON.parse(localStorage.getItem("userInput")));
  }, []);

  useEffect(() => {
    localStorage.setItem("userInput", JSON.stringify(notes));
  }, [notes]);

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
    <div>
      {/* <h1>{getNote().text}</h1> */}
      <Quill note={getNote()} onChange={handleChange} />
    </div>
  );
};

export default NoteEditor;
