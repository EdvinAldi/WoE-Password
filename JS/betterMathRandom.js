export function betterMathRandom() {
  const charArray = new Uint32Array(1);
  crypto.getRandomValues(charArray);
  const betterRandom = charArray[0] / 4294967295;
  return betterRandom;
}