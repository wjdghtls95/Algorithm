// 백준 1654 - 랜선 자르기 (Number 버전)
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const [K, N] = lines[0].split(' ').map(Number);
const lens = lines.slice(1).map(Number);

let lo = 1;
let hi = Math.max(...lens);
let ans = 0;

while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);
  let cnt = 0;
  for (const L of lens) cnt += Math.floor(L / mid);

  if (cnt >= N) {        // mid 길이로 충분히 N개 이상 만들 수 있음 -> 더 길게 도전
    ans = mid;
    lo = mid + 1;
  } else {               // 부족 -> 더 짧게
    hi = mid - 1;
  }
}

console.log(ans);