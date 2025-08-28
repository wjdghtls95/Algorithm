function solution(arr) {
  const len = arr.length;

  // 이미 2의 거듭제곱이면 그대로 반환
  if ((len & (len - 1)) === 0) return arr;

  // 다음 2의 거듭제곱 구하기
  const nextPow = 2 ** Math.ceil(Math.log2(len));

  // 부족한 만큼 0 채우기
  return arr.concat(Array(nextPow - len).fill(0));
}