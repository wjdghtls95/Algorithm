function solution(citations) {
    citations.sort((a, b) => b - a); // 내림차순
    let h = 0;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        }
    }

    return h;
}