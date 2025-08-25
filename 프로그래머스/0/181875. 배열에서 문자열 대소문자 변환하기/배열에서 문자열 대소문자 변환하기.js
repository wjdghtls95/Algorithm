function solution(strArr) {
    var answer = [...strArr];

    for (let i = 0; i < strArr.length; i++) {
        if(i % 2 === 0) {
            answer[i] = answer[i].toLowerCase();
        } else {
            answer[i] = answer[i].toUpperCase();
        }
    }

    return answer;
}