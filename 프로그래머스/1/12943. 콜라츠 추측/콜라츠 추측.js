function solution(num) {
    var answer = num;
    let accCnt = 0;

    while (answer !== 1 && accCnt <= 500) {
        answer = answer % 2 === 0 ? answer / 2 : answer * 3 + 1;
        accCnt++
    }


    return answer === 1 ? accCnt : -1;
}