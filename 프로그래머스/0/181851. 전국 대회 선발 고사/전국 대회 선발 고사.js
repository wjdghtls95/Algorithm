function solution(rank, attendance) {
    // (등수, 인덱스) 쌍 만들고 참석 가능한 애들만 필터
    const candidates = rank
        .map((r, i) => [r, i])
        .filter(([_, i]) => attendance[i])
        .sort((a, b) => a[0] - b[0]); // 등수 오름차순 정렬

    const [a, b, c] = candidates.slice(0, 3).map(([_, i]) => i);
    return 10000 * a + 100 * b + c;
}