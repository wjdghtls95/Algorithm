function solution(number) {
  let answer = 0;
  const n = number.length;

  // idx: 다음에 볼 인덱스
  // cnt: 지금까지 뽑은 개수
  // sum: 지금까지 뽑은 숫자들의 합
  function dfs(idx, cnt, sum) {
    // 1) 3명 뽑은 경우
    if (cnt === 3) {
      if (sum === 0) answer++;
      return;
    }

    // 2) 배열 끝까지 봤는데 더 못 뽑는 경우
    if (idx === n) return;

    // 3) idx부터 n-1까지 조합 탐색
    for (let i = idx; i < n; i++) {
      dfs(i + 1, cnt + 1, sum + number[i]);
    }
  }

  // 아무것도 안 고른 상태에서, 0번 인덱스부터 시작
  dfs(0, 0, 0);

  return answer;
}