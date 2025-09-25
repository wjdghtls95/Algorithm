function solution(k, tangerine) {
    const sizeMap = new Map();

    for (const size of tangerine) {
        sizeMap.set(size, (sizeMap.get(size) || 0) + 1);
    }

    const sortedSizes = [...sizeMap.entries()].sort((a, b) => b[1] - a[1]);

    let selected = 0;
    let typeCount = 0;

    for (const [size, count] of sortedSizes) {
        selected += count;
        typeCount++;

        if (selected >= k) break;
    }

    return typeCount;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]	 ))
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]	))
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]	))