import { useContext } from "react";
import GlobalContext from "../../GlobalContext";
import NotesCategory from "../../components/notesCategory";

const NotesCategories = () => {
  const { notes } = useContext(GlobalContext);

  const getCategories = () => {
    // get unique categories
    return [...new Set(notes.map((note) => note.category))];
  };

  return (
    <div>
      {getCategories().map((category) => (
        <NotesCategory category={category} key={`${category}id`}/>
      ))}
    </div>
  );
};

export default NotesCategories;
