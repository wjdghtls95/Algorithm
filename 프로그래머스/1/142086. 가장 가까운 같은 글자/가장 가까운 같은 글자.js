function solution(s) {
    const str = s.split('');

      const answer = [];
      const checkStr = [];

      for (let i = 0; i < str.length; i++) {
        if (!checkStr.includes(str[i])) {
          answer.push(-1);
          checkStr.push(str[i]);
        } else {
          answer.push(i - checkStr.lastIndexOf(s[i]));
          checkStr.push(str[i]);
        }
      }
      return answer;
}