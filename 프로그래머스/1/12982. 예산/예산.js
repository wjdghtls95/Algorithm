function solution(d, budget) {
    var answer = 0;

    const sorted = d.sort((a, b) => a - b);

    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] > budget) break

        budget -= d[i]
        answer += 1
    }

    return answer;
}