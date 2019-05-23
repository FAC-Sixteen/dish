const moment = require("moment");

module.exports = timeCooked => {
  const year = timeCooked.getFullYear();
  const month =
    timeCooked.getMonth() < 10
      ? "0" + (timeCooked.getMonth() + 1).toString()
      : (timeCooked.getMonth() + 1).toString();
  const day = timeCooked.getDate() + 1;
  return moment(`${year}${month}${day}`).fromNow();
};
