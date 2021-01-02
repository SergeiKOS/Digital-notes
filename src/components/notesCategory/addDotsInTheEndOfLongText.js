export const addDotsInTheEndOfLongText = (text, charactersAmount) => {
  const cutText = text.slice(0, charactersAmount);

  if (cutText.length === charactersAmount) {
    const addDots = `${cutText} ...`;
    return addDots;
  }

  return cutText;
};
