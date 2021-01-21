export const filterArrayById = (array: any[], id: string | number) =>
  array.filter((item) => item.id !== id);
