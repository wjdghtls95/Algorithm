function solution(myString, pat) {
  if (pat === "") return 0; // 보통 빈 패턴은 0 처리
  let count = 0;
  let pos = 0;

  while (true) {
    const found = myString.indexOf(pat, pos);
    if (found === -1) break;
    count++;
    pos = found + 1; // 1칸 전진 → 겹치는 경우도 셈
  }
  return count;
}