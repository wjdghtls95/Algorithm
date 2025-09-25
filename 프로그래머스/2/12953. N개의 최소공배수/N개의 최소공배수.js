// 최대공약수(GCD) 계산 - 유클리드 호제법
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수(LCM) 계산
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// n개의 최소공배수
function solution(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result = lcm(result, arr[i]);
    }

    return result;
}

console.log(solution([2,6,8,14]	))
console.log(solution([1,2,3]	))

