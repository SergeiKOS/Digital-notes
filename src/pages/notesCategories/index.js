import { useContext } from "react";
import GlobalContext from "../../GlobalContext";
import Header from "../../components/header";
import NotesCategory from "../../components/notesCategory";

const notesCategoryWrapper = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "20px",
};

const NotesCategories = () => {
  const { notes } = useContext(GlobalContext);

  const getCategories = () => {
    return [...new Set(notes.map((note) => note.category))];
  };

  return (
    <>
      <Header withButton={true} mainPage={true} />
      <div style={notesCategoryWrapper}>
        {getCategories().map((category) => (
          <NotesCategory category={category} key={`${category}id`} />
        ))}
      </div>
    </>
  );
};

export default NotesCategories;
