function solution(arr) {
    const row = arr.length;
    const col = arr[0]?.length ?? 0;
    const n = Math.max(row, col);

    // 각 행이 배열인지 보장
    for (let i = 0; i < row; i++) {
        if (!Array.isArray(arr[i])) arr[i] = [];
        while (arr[i].length < n) arr[i].push(0);
    }
    while (arr.length < n) arr.push(Array(n).fill(0));

    return arr;
}