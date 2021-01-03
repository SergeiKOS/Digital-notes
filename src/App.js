import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import GlobalContext from "./GlobalContext";
import NotFound from "./pages/notFound";
import NotesCategories from "./pages/notesCategories";
import EditNote from "./pages/editNote";

const initialState = [
  {
    id: "42d14e98-3021-4841-bf41-2d550e79c76c",
    category: "How to use this app",
    noteHeader: "Attention",
    text:
      "<p>Your notes will be store in your browser in the local storage. If you clear local storage your data will be lost.</p>",
  },
  {
    id: "4d118fdd-7a94-4d43-adbd-eb1bf58b5ead",
    category: "How to use this app",
    noteHeader: "Hot keys",
    text:
      "<h2>Hot keys:</h2><ul><li>Ctrl + b -> bold text</li><li>Ctrl + u -> underline text</li><li>Ctrl + z -> undo</li><li>Ctrl + z -> undo</li><li>Ctrl + y -> redo</li><li>Ctrl + Shift + s -> save note and exit</li></ul>",
  },
  {
    id: "e33903ac-9212-4595-8858-916704557c37",
    category: "Todo",
    noteHeader: "TypeScript",
    text: "Learn TypeScript",
  },
  {
    id: "fa26200b-1486-4930-9e6a-29c6a5c5d867",
    category: "Todo",
    noteHeader: "React Native",
    text: "Learn React Native",
  },
  {
    id: "e4a8c90d-45ed-443c-9572-8201c1e4899b",
    category: "Todo",
    noteHeader: "Learn Next.js",
    text: "Learn Next.js",
  },
];

function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("userInput")) || initialState
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
}

export default App;
