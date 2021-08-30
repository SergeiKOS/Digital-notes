export const getDate = (creationDate: string) => {
  // Created: ‎December ‎23, ‎2020, ‏‎9:13:29 AM | Modified: ‎August ‎24,
  // ‎2021, ‏‎6:35:25 AM | Number of letters: 100
  console.log(typeof creationDate);

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
