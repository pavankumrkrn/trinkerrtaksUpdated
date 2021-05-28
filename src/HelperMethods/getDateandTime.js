const getDateAndTime = () => {
  var currentdate = new Date();
  var date =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();
  let minutes = currentdate.getMinutes();
  if (minutes >= 1 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  var time = currentdate.getHours() + ":" + minutes;
  return { date, time };
};

export { getDateAndTime };
