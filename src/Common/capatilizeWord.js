export const capitalizeWords = (str) => {
  // split the string into an array of words
  let words = str.split(" ");

  // loop through the words array and capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  // join the modified words array back into a string
  return words.join(" ");
};
