function solution(sides) {
    let maxNum = Math.max(...sides);
  let minNum = Math.min(...sides);
  let sum = sides.reduce((a, c) => a + c, 0);
  return sum - (maxNum - minNum) - 1;
}