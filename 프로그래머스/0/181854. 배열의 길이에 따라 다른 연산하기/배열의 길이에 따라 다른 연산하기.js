function solution(arr, n) {
    if (arr.length % 2 === 1) {
        return arr.map((it, i) =>
            (i % 2 === 0 ? it + n : it)
        )
    } else {
        return arr.map((it, i) =>
            (i % 2 === 1 ? it + n : it)
        )
    }
}