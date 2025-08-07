function solution(arr, queries) {
    const result = [];

    for (const [s, e, k] of queries) {
        let min = Infinity;

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }

        result.push(min === Infinity ? -1 : min);
    }

    return result;
}