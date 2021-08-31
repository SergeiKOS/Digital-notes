export const getDate = (creationDate: string) => {
  const getDateHelper = () => {
    const newCreationDate = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthNumber = newCreationDate.getUTCMonth() + 1;
    const monthName = monthNames[monthNumber];
    const day = newCreationDate.getUTCDate();
    const year = newCreationDate.getUTCFullYear();
    const time = newCreationDate.toLocaleTimeString("en-US");

    return `${monthName} ${day}, ${year}, ${time} `;
  };
  if (creationDate === "getLastDate") {
    return getDateHelper();
  } else if (creationDate === "") {
    return getDateHelper();
  } else {
    return creationDate;
  }
};
