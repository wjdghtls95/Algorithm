function solution(elements) {
    const n = elements.length;
    const uniqueSums = new Set();

    // 두 배로 확장 (원형 효과)
    const circular = [...elements, ...elements];

    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            // 항상 완전한 부분 수열 추출 가능
            const subArray = circular.slice(start, start + length);
            const total = subArray.reduce((sum, num) => sum + num, 0);
            uniqueSums.add(total);
        }
    }

    return uniqueSums.size;
}

console.log(solution([7,9,1,1,4]))