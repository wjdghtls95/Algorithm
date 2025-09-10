function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => (b + a) - (a + b)) // ab vs ba 비교
    .join('');

  // 0만 여러 개면 "0" 하나만 출력
  return result[0] === '0' ? '0' : result;
}
