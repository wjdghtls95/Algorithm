const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const [N, M] = input[line++].split(" ").map(Number);
  const priorities = input[line++].split(" ").map(Number);

  // 큐 초기화 (문서번호, 중요도)
  let queue = priorities.map((p, i) => [i, p]);
  let order = 0;

  while (queue.length > 0) {
    const [idx, priority] = queue.shift();

    // 뒤에 더 큰 중요도가 있는지 검사
    if (queue.some(([_, p]) => p > priority)) {
      queue.push([idx, priority]); // 뒤로 보냄
    } else {
      order++;
      if (idx === M) {
        console.log(order);
        break;
      }
    }
  }
}
