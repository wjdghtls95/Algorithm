function solution(t, p) {
    var answer = 0;

    for(let i = 0; i <= t.length - p.length; i++) {
        if (Number(t.slice(i, i + p.length)) <= Number(p)) answer++;

    }

    console.log(answer)

    return answer
}