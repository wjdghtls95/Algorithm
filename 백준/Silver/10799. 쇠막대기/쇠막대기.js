// /dev/stdin에서 입력 읽기
const fs = require('fs');
const s = fs.readFileSync(0, 'utf8').trim();

let open = 0;     // 현재 열려있는 '(' 수 = 열린 막대 수
let pieces = 0;   // 잘린 조각 총합
let prev = '';    // 직전 문자

for (const ch of s) {
  if (ch === '(') {
    open += 1;        // 막대 시작(일단 열림)
  } else { // ch === ')'
    open -= 1;        // 무엇이든 닫히므로 먼저 하나 줄임
    if (prev === '(') {
      // 바로 직전이 '(' 였다면 '()' → 레이저
      // 레이저는 현재 열려있는 막대(open) 개수만큼 조각을 추가
      pieces += open; // 방금 '('을 닫아 뺀 상태라 정확히 "실제 열린 막대 수"
    } else {
      // 레이저가 아니면 막대의 끝 → 마지막 조각 +1
      pieces += 1;
    }
  }
  prev = ch;
}

console.log(pieces);