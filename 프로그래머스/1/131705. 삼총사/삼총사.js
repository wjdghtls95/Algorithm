function solution(number) {
    let count = 0;
    const n = number.length;
    
    // 세 중첩된 루프를 사용하여 모든 세 숫자 조합을 확인합니다.
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
          // 세 숫자의 합이 0이면 카운트를 증가시킵니다.
          if (number[i] + number[j] + number[k] === 0) {
            count++;
          }
        }
      }
    }
    return count;
  
}