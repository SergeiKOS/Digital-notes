export const addDotsInTheEndOfLongText = (text: string, charactersAmount: number) : string => {
  const cutText = text.slice(0, charactersAmount);

  if (cutText.length === charactersAmount) {
    const addDots = `${cutText} ...`;
    return addDots;
  }

  return cutText;
};
