function solution(x) {
    const arr = Array.from(String(x), Number);
    
    const sum = arr.reduce((acc, cur) => acc + cur, 0);

    return x % sum === 0
}

console.log(solution(10))
console.log(solution(12))
console.log(solution(11))
console.log(solution(13))