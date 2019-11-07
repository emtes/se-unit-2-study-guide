//DND problem
const attributes = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'chararisma'];

//Roll my four dice, return array with 4 random numbers
let rollDice = () => {
  let rolledArr = [];
  for (let i = 0; i < 4; i ++) {
    rolledArr[i] = Math.floor(Math.random() * 6 + 1);
  }
  return rolledArr;
};

//Choose top 3 from my roll, take in array of 4, return number that is sum of top 3 added
let topThreeRollsAdded = (rolledNumsArr) => {
  let finalSum = 0;
  rolledNumsArr.sort(function(a, b) {return b - a;}).pop();
  for (let num of rolledNumsArr) {
    finalSum += num;
  }
  return finalSum;
};

//gen hitpoints from constitution stat, subtract 10, divide by 2, and round down -- return number
let hitpointGen = (statValue) => {
  return Math.floor((statValue - 10) / 2);
};

//combine steps to calculate stats
let fullStatsCalc = () => {
  return topThreeRollsAdded(rollDice());
};

//character generator
const characterGenerator = (name) => {
  let characterStats = {};
  characterStats.name = name;
  for (let att of attributes) {
    characterStats[att] = fullStatsCalc();
  }
  characterStats.hitpoints = hitpointGen(characterStats.constitution);
  return characterStats;
};

console.log(characterGenerator('enmanuel'));