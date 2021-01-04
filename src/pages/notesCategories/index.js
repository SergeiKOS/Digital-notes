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
      <Header withButton={true} mainPage={true} />
      <div
        className="notes-category-wrapper"
        style={{ display: "inline-flex" }}
      >
        {getCategories().map((category) => (
          <NotesCategory category={category} key={`${category}id`} />
        ))}
      </div>
    </>
  );
};

export default NotesCategories;
