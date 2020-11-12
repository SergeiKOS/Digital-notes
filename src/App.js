import { useState } from "react";
import Header from "./containers/header";
import Note from "./components/note";

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
        if (tagName === "TEXTAREA") {
          note.text = value;
          return note;
        } else if (tagName === "INPUT") {
          note.title = value;
          return note;
        }
      } else {
        return note;
      }
    });
    setNotes(notesCopy);
  };

  const handleClick = (inputRef) => {
    // if (window.getSelection) {
    //   console.log(window.selectionEnd);
    //   let selectedText = window.getSelection().getRangeAt(0);
    //   console.log(selectedText);
    // }
    // if (inputRef.current.selectionStart === inputRef.current.selectionEnd) {
    //   return;
    // }
    // inputRef.current.selectionStart 
    
    // let selected = input.value.slice(input.selectionStart, input.selectionEnd);
    // input.setRangeText(`*${selected}*`); 
    
  
    console.log("handleClick -> inputRef.current", inputRef.current.selectionStart )
    console.log("handleClick -> inputRef.current", inputRef.current.selectionEnd )
    console.log(inputRef.current )
    // inputRef.current.focus()
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {notes.map((note) => (
          <Note note={note} onChange={handleChange} onClick={handleClick} key={note.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
