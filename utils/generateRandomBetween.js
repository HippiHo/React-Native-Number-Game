export default function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum !== exclude || rndNum === max || rndNum === min) {
    return rndNum;
  }
  return generateRandomBetween(min, max, exclude);
}
