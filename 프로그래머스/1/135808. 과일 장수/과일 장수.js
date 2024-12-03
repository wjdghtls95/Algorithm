function solution(k, m, score) {
    var answer = 0;
  
  score.sort((a, b) => b - a);
  
  let boxCnt = Math.floor(score.length / m);

  for(let i = 1; i <= boxCnt; i++) {
    answer += score[m * i - 1] * m;
  }

  return answer;
}