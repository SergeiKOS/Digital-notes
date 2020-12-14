import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { NotesContainer, NoteCard } from "./NoteStyles";
import NoteTitle from "./noteTitle/NoteTitle";
import Quill from "./quill/Quill";
import AddNote from "../../components/addNote";

const NoteList = () => {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      title: "Title",
      text:
        "<h1>How to use this notes</h1> <p>Your notes will be store in your browser in the local storage. If you clear local storage your data will be lost.</p><h2>Hor keys:</h2><ul><li>Ctrl + b -> bold text</li></ul>",
    },
    {
      id: uuidv4(),
      title: "Another Title",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda.",
    },
  ]);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("userInput"));
    if (notes) setNotes(JSON.parse(localStorage.getItem("userInput")));
  }, []);

  useEffect(() => {
    localStorage.setItem("userInput", JSON.stringify(notes));
  }, [notes]);

  const handleChange = (e, delta, id) => {
    const changeText = (value, tagName = null) => {
      let notesCopy = [...notes];
      notesCopy = notesCopy.map((note) => {
        if (note.id === id) {
          if (tagName === "INPUT") {
            note.title = value;
          } else {
            note.text = e;
          }
          return note;
        } else {
          return note;
        }
      });
      setNotes(notesCopy);
    };
    if (typeof e === "string") {
      changeText(e);
    } else if (typeof e === "object") {
      const { tagName, value } = e.target;
      changeText(value, tagName);
    }
  };

  const handleAddNote = () => {
    setNotes([
      ...notes,
      {
        id: uuidv4(),
        title: "Another Title",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda.",
      },
    ]);
  };

  const handleDelete = (id) => {
    if (window.confirm("If deleted data can't be restored.")) {
      setNotes(notes.filter((note) => note.id !== id));
    } else return;
  };
  
  return (
    <>
      <AddNote onAddNote={handleAddNote} />
      <NotesContainer>
        {notes.map((note) => (
          <NoteCard key={note.id}>
            <NoteTitle
              note={note}
              onChange={handleChange}
              value={"title"}
              maxLength="20"
            />
            <Quill
              value={note.text}
              id={note.id}
              onChange={handleChange}
              onDelete={handleDelete}
            />
          </NoteCard>
        ))}
      </NotesContainer>
    </>
  );
};

export default NoteList;
