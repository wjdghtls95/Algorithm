function solution(n, m, section) {
    var answer = 0;
    let painted = 0;

    for (const pos of section) {
        if(pos > painted) {
            answer++

            painted = pos + m - 1
        }
    }

    return answer;
}