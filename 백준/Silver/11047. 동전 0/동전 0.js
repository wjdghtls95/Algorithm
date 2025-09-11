const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

let remaining = K;
let count = 0;

// 큰 동전부터 확인
for (let i = N - 1; i >= 0; i--) {
  if (coins[i] <= remaining) {
    count += Math.floor(remaining / coins[i]);
    remaining %= coins[i];
  }
}

console.log(count);