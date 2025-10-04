function solution(absolutes, signs) {
  const obj = Object.fromEntries(
    absolutes.map((v, i) => [i, signs[i] ? v : -v]) // 인덱스를 키로
  );
  return Object.values(obj).reduce((acc, x) => acc + x, 0);
}