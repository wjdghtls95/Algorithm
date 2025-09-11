const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = +input[0];
const meetings = input.slice(1).map(line => line.split(" ").map(Number));

// 끝나는 시간 → 시작 시간 순으로 정렬
meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let count = 0;
let end = 0;

for (const [start, finish] of meetings) {
  if (start >= end) {
    count++;
    end = finish;
  }
}

console.log(count);