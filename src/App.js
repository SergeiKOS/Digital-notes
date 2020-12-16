import {useState} from 'react'
import Header from "./containers/header";
import NoteList from "./components/note/NoteList";
import GlobalContext from './GlobalContext'
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      title: "Enter your title here",
      text:
        "<h1>How to use this notes</h1> <p>Your notes will be store in your browser in the local storage. If you clear local storage your data will be lost.</p><h2>Hot keys:</h2><ul><li>Ctrl + b -> bold text</li><li>Ctrl + u -> underline text</li><li>Ctrl + z -> undo</li><li>Ctrl + z -> undo</li><li>Ctrl + y -> redo</li></ul>",
    }
  ]);
  return (
    <GlobalContext.Provider value={{ notes, setNotes }}>
      <div>
        <Header />
        <NoteList />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
