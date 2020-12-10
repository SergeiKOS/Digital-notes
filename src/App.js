import { useState } from "react";
import Header from "./containers/header";
import NoteTextarea from "./components/note/Note";

function App() {
  const [notes, setNotes] = useState([
    {
      id: "1",
      position: 1,
      title: "Title",
      text: "Some text",
    },
    {
      id: "2",
      position: 2,
      title: "Another Title",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda.",
    },
  ]);

  const handleChange = (e, id) => {
    const { tagName, value } = e.target;

    let notesCopy = [...notes];
    notesCopy = notesCopy.map((note) => {
      if (note.id === id) {
        if (tagName === "INPUT") {
          note.title = value;
          return note;
        }
      } else {
        return note;
      }
    });
    setNotes(notesCopy);
  }; 

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {notes.map((note) => (
          <NoteTextarea note={note} onChange={handleChange} key={note.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
