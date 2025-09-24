function solution(k, score) {
    let answer = [];
    let honor = [];

    for (let s of score) {
        honor.push(s);                    // 점수 추가
        honor.sort((a,b) => b-a);         // 내림차순 정렬
        if (honor.length > k) honor.pop() // k명 유지
        answer.push(honor[honor.length-1]); // 최하위 점수 기록
    }

    return answer;
}