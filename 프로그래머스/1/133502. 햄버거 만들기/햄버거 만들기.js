/**
 * 재료
 * 1 빵
 * 2 야채
 * 3 고기
 */

function solution(ingredient) {
    let answer = 0;
    const arr = [1, 2, 3, 1]
    const stack = [];

    for (const x of ingredient) {
        stack.push(x);

        const n = stack.length;
        if (
            n >= 4 &&
            stack[n - 4] === arr[0] &&
            stack[n - 3] === arr[1] &&
            stack[n - 2] === arr[2] &&
            stack[n - 1] === arr[3]
        ) {
            stack.length = n - 4; // 4개 제거
            answer++;
        }
    }

    return answer;
}


console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))