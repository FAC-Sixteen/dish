const titleCase = title => {
  const words = title.split(" ");
  const result = words.map(word => {
    const firstLetter = word.split("")[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return result.join(" ");
};

module.exports = titleCase;
