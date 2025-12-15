function solution(k, m, score) {
    // 1. 점수 내림차순 정렬
    score.sort((a, b) => b - a);

    let answer = 0;

    // 2. m개씩 묶어서 상자 만들기
    for (let i = 0; i < score.length; i += m) {
        const box = score.slice(i, i + m); // 길이 m까지 자름

        // 3. m개가 안 되면 상자 못 만드니까 종료
        if (box.length < m) break;

        // 4. 상자 가격 = 그 상자의 최솟값 * m
        // 내림차순이라 box[box.length - 1] 이 최솟값
        const boxMin = box[box.length - 1];
        answer += boxMin * m;
    }

    return answer;
}