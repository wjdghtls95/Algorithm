const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, W, L] = input[0].split(" ").map(Number);
const trucks = input[1].split(" ").map(Number);

let time = 0;
let bridge = Array(W).fill(0);
let currentWeight = 0;
let waiting = [...trucks];

while (bridge.length > 0) {
  time++;
  currentWeight -= bridge.shift(); // 맨 앞 트럭 내리기

  if (waiting.length > 0) {
    if (currentWeight + waiting[0] <= L) {
      const truck = waiting.shift();
      bridge.push(truck);
      currentWeight += truck;
    } else {
      bridge.push(0);
    }
  }
}

console.log(time);