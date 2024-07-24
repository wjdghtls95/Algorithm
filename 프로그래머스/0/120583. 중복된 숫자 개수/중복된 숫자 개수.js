function solution(array, n) {
    var answer = 0;
    array.forEach((it) => {if (it===n) answer++})
    return answer;
}