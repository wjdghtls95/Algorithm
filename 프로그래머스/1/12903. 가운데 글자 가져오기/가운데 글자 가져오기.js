function solution(s) {
    const mid = Math.floor(s.length / 2);

    return s.length % 2 === 1
        ? s[mid]                    // 홀수 → 가운데 1글자
        : s.slice(mid - 1, mid + 1) // 짝수 → 가운데 2글자
}