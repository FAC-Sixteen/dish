const titleCase = title => {
  const firstLetter = title.split("")[0].toUpperCase();
  const restOfWord = title.slice(1);

  console.log(firstLetter + restOfWord);

  return firstLetter + restOfWord;
}

module.exports = titleCase;
