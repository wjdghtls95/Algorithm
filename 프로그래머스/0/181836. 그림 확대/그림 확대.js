function solution(picture, k) {
    const result = [];

    for (const row of picture) {
        // 가로 확대: 각 문자 k번 반복
        const expandedRow = [...row].map(ch => ch.repeat(k)).join("");
        // 세로 확대: 같은 행을 k번 추가
        for (let i = 0; i < k; i++) {
            result.push(expandedRow);
        }
    }

    return result;
}