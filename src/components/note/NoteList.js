import { useEffect } from "react";
  
import { NotesContainer, NoteCard } from "./NoteStyles";
import NoteTitle from "./noteTitle/NoteTitle";
import Quill from "./quill/Quill";

import { useContext } from "react";
import GlobalContext from "../../GlobalContext";

const NoteList = () => {
  const { notes, setNotes } = useContext(GlobalContext);

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

  const handleDelete = (id) => {
    if (window.confirm("If deleted data can't be restored.")) {
      setNotes(notes.filter((note) => note.id !== id));
    } else return;
  };

  return (
    <>
      <NotesContainer>
        {notes.map((note) => (
          <NoteCard key={note.id}>
            <NoteTitle
              note={note}
              onChange={handleChange}
              value={"title"}
              maxLength="20"
              cardsAmount={notes.length}
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
