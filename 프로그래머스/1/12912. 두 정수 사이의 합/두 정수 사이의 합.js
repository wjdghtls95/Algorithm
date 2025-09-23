function solution(a, b) {
    var answer = 0;

    let temp;

    if (a > b) {
        temp = a;
        a = b
        b = temp
    }
    
    for (var i = a; i <= b; i++) {
        answer += i
    }

    return answer;
}