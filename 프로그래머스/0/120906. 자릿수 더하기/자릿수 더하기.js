function solution(n) {
    var answer = 0;
    n.toString().split('').forEach((it) => answer += Number(it))
    return answer;
}