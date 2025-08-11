function solution(number) {
    var answer = 0;
    const numArr= number.split('');
    for (let i = 0; i < numArr.length; i++) {
        answer += Number(numArr[i]);
    }

    return answer % 9;
}