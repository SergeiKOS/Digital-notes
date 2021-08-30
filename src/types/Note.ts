type Note = {
  id: string;
  category: string;
  noteHeader: string;
  text: string;
  stats: {
    created: string;
    modified: string;
    numberOfLetters: string;
  };
};

export default Note;
