const consonantList = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const doubleConsonants = (phrase) => {
  let finalArr = [];
  for (let i = 0; i < phrase.length; i ++) {
    if (consonantList.includes(phrase[i])) {
      finalArr.push(phrase[i], phrase[i]);
    } else {
      finalArr.push(phrase[i]);
    }
  }
  return finalArr.join('');
};

console.log(doubleConsonants('He.'));