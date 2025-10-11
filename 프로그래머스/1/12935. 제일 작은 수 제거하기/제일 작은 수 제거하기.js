function solution(arr) {
  if (arr.length === 1) return [-1];

  const min = Math.min(...arr);
  return arr.filter(x => x !== min);
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10]));         // [-1]