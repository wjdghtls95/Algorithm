function solution(s) {
    var answer = 0;

      const test = s.split(' ');

      for (let i = 0; i < test.length; i++) {
        if (test[i] === 'Z') {
          answer -= Number(test[i - 1]);
        } else {
          answer += Number(test[i]);
        }
      }

      return answer;
}