const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

function solution(expr) {
  const parts = expr.split("-");
  let result = parts[0]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  for (let i = 1; i < parts.length; i++) {
    const sum = parts[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    result -= sum;
  }

  return result;
}

console.log(solution(input));