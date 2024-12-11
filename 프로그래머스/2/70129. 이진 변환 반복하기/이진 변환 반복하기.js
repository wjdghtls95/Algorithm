function solution(s) {
     let transformationCount = 0; // 이진 변환 횟수
  let zeroCount = 0;           // 제거된 0의 총 개수

  while (s !== "1") {
    // 현재 문자열에서 0 제거
    const removedZeros = s.split("0").join("");
    zeroCount += s.length - removedZeros.length; // 제거된 0의 개수 누적

    // 남은 문자열의 길이를 2진수로 변환
    s = removedZeros.length.toString(2);

    // 이진 변환 횟수 증가
    transformationCount++;
  }

  // 결과 반환: [변환 횟수, 제거된 0의 총 개수]
  return [transformationCount, zeroCount];
}