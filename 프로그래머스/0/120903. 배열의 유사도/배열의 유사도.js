function solution(s1, s2) {
    var answer = 0;
    
    s1.forEach(it => {
        if (s2.includes(it)) {
            answer++
        }
    })
    return answer;
}