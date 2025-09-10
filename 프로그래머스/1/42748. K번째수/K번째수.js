function solution(array, commands) {
    var answer = [];
    let num;

    for (const [i, j, k] of commands) {
        num = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
        answer.push(num)
    }

    return answer;
}