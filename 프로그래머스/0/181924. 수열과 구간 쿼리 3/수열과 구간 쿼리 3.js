function solution(arr, queries) {
    let temp;
    for (const query of queries) {
        temp = arr[query[0]]
        arr[query[0]] = arr[query[1]]
        arr[query[1]] = temp;
    }

    return arr;
}
