import { useContext } from "react";
import GlobalContext from "../../GlobalContext";
import Header from "../../components/header";
import NotesCategory from "../../components/notesCategory";

const NotesCategories = () => {
  const { notes } = useContext(GlobalContext);

  const getCategories = () => {
    return [...new Set(notes.map((note) => note.category))];
  };

  return (
    <>
      <Header withButton={true} />
      {getCategories().map((category) => (
        <NotesCategory category={category} key={`${category}id`} />
      ))}
    </>
  );
};

export default NotesCategories;
