function solution(n, control) {
    let answer = 0;
    const controlArr = control.split('')

    for(let i = 0; i < controlArr.length; i++) {
        if (controlArr[i] === 'w') {
            answer+=1;
        }
        if (controlArr[i] === 's') {
            answer-=1;
        }
        if (controlArr[i] === 'd') {
            answer+=10
        }
        if (controlArr[i] === 'a') {
            answer-=10
        }
    }


    return n + answer;
}