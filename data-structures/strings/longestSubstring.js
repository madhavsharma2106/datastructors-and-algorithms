const str = "ahhibcwwww";

const longestSubstringWithKdistinctCharacters = (
  str,
  distinctCharactersLength
) => {
  let result = 0,
    i = 0,
    map = {};

  const sizeOfMap = () => Object.keys(map).length;

  for (let j = 0; j < str.length; j++) {
    const c = str.charAt(j);

    if (map[c]) map[c]++;
    else map[c] = 1;

    if (sizeOfMap() <= distinctCharactersLength) {
      result = Math.max(result, j - i + 1);
    } else {
      while (sizeOfMap() > distinctCharactersLength) {
        const l = str.charAt(i);
        const count = map[l];
        if (count === 1) delete map[l];
        else map[l]--;
        i++;
      }
    }
  }

  return result;
};

const result = longestSubstringWithKdistinctCharacters(str, 2);
console.log(result);
