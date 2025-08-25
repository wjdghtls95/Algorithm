function solution(my_string, alp) {
    var answer = [...my_string];

    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === alp) {
            answer[i] = answer[i].toUpperCase();
        }
    }

    return answer.join('');
}