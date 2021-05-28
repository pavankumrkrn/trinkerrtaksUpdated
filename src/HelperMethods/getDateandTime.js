const getDateAndTime = () => {
  var currentdate = new Date();
  var date =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();
  var time = currentdate.getHours() + ":" + currentdate.getMinutes();
  return { date, time };
};

export { getDateAndTime };
