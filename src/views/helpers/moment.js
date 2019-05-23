const moment = require("moment");

const timeCooked = timeCooked => {
  const year = timeCooked.getFullYear();
  const month =
    timeCooked.getMonth() < 10
      ? "0" + (timeCooked.getMonth() + 1).toString()
      : (timeCooked.getMonth() + 1).toString();
  const day = timeCooked.getDate() + 1;
  if (day === new Date().getDate() + 1) return "Today";
  return moment(`${year}${month}${day}`)
    .startOf("day")
    .fromNow();
};

const timeCollected = time => {
  return moment(time).format("dddd [at] h a");
};

module.exports = { timeCooked, timeCollected };
