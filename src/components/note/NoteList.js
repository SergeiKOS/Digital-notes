import { NotesContainer, NoteCard } from "./NoteStyles";
// import Quill from "./quill/Quill";

import { useContext } from "react";
import GlobalContext from "../../GlobalContext";

const NoteList = () => {
  const { notes, setNotes } = useContext(GlobalContext);

  return (
    <NotesContainer>
      {notes.map((note) => (
        <NoteCard>
          {note.text.replace(/(<([^>]+)>)/gi, "")}
        </NoteCard>
      ))}
    </NotesContainer>
  );
};

export default NoteList;

// import { useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import { NotesContainer, NoteCard } from "./NoteStyles";
// import NoteTitle from "./noteTitle/NoteTitle";
// import Quill from "./quill/Quill";

// import { useContext } from "react";
// import GlobalContext from "../../GlobalContext";

// const NoteList = () => {
//   const { notes, setNotes } = useContext(GlobalContext);

//   useEffect(() => {
//     const notes = JSON.parse(localStorage.getItem("userInput"));
//     if (notes) setNotes(JSON.parse(localStorage.getItem("userInput")));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("userInput", JSON.stringify(notes));
//   }, [notes]);

//   const handleChange = (e, delta, id) => {
//     const changeText = (value, tagName = null) => {
//       let notesCopy = [...notes];
//       notesCopy = notesCopy.map((note) => {
//         if (note.id === id) {
//           if (tagName === "INPUT") {
//             note.title = value;
//           } else {
//             note.text = e;
//           }
//           return note;
//         } else {
//           return note;
//         }
//       });
//       setNotes(notesCopy);
//     };
//     if (typeof e === "string") {
//       changeText(e);
//     } else if (typeof e === "object") {
//       const { tagName, value } = e.target;
//       changeText(value, tagName);
//     }
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("If deleted data can't be restored.")) {
//       setNotes(notes.filter((note) => note.id !== id));
//     } else return;
//   };

//   const handleOnDragEnd = (result) => {
//     if (!result.destination) return;

//     const notesCopy = Array.from(notes);
//     const [reorderedItem] = notesCopy.splice(result.source.index, 1);
//     notesCopy.splice(result.destination.index, 0, reorderedItem);

//     setNotes(notesCopy);
//   };

//   return (
//     <DragDropContext onDragEnd={handleOnDragEnd}>
//       <Droppable droppableId="characters">
//         {(provided) => (
//           <NotesContainer {...provided.droppableProps} ref={provided.innerRef}>
//             {notes.map((note, index) => (
//               <Draggable key={note.id} draggableId={note.id} index={index}>
//                 {(provided) => (
//                   <NoteCard
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <NoteTitle
//                       note={note}
//                       onChange={handleChange}
//                       value={"title"}
//                       maxLength="20"
//                     />
//                     <Quill
//                       value={note.text}
//                       id={note.id}
//                       onChange={handleChange}
//                       onDelete={handleDelete}
//                     />
//                   </NoteCard>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </NotesContainer>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default NoteList;
