type Note = {
  id: string;
  category: string;
  noteHeader: string;
  text: string;
  stats: {
    created: string;
    modified: {
      lastTime: string;
      amountOfTimes: number;
    };
    numberOfLetters: string;
  };
};

export default Note;
