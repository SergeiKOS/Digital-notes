import { useState, useEffect } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Note from "./types/Note";
import GlobalContext from "./GlobalContext";
import NotFound from "./pages/notFound";
import NotesCategories from "./pages/notesCategories";
import EditNote from "./pages/editNote";

const initialState: Note[] = [
  {
    id: "42d14e98-3021-4841-bf41-2d550e79c76c",
    category: "About app",
    noteHeader: "Attention",
    text:
      "<p>Your notes will be stored in your browser in the local storage. If you clear local storage your data will be lost.</p>",
  },
  {
    id: "4d118fdd-7a94-4d43-adbd-eb1bf58b5ead",
    category: "About app",
    noteHeader: "Hot keys",
    text:
      "<h2>Hot keys:</h2><ul><li>Ctrl + b -> bold text</li><li>Ctrl + u -> underline text</li><li>Ctrl + z -> undo</li><li>Ctrl + y -> redo</li><li>Ctrl + Shift + s -> save note and exit</li></ul>",
  },
];

const App = () => {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("userInput")!) || initialState
  );

  useEffect(() => localStorage.setItem("userInput", JSON.stringify(notes)), [
    notes,
  ]);

  return (
    <GlobalContext.Provider value={{ notes, setNotes }}>
      <Switch>
        <Route path="/edit-note/:id">
          <EditNote />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route exact path="/">
          <NotesCategories />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </GlobalContext.Provider>
  );
};

export default App;
