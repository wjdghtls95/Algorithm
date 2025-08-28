function solution(strArr) {
    const counts = new Map();

    for (const str of strArr) {
        const len = str.length;
        counts.set(len, (counts.get(len) || 0) + 1);
    }

    return Math.max(...counts.values());
}