export const formateDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0"); // get the day and pad it
  const month = String(date.getMonth() + 1).padStart(2, "0"); //get the month and pad it
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
