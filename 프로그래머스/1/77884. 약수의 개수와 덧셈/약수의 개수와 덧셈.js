function solution(left, right) {
    let sum = 0;
    for (let n = left; n <= right; n++) {
        sum += Number.isInteger( Math.sqrt(n)) ? -n : n;
    }
    return sum;
}

console.log(solution(13, 17))
console.log(solution(24, 27))