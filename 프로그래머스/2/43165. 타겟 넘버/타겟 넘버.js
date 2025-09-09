function solution(numbers, target) {
    let count = 0;
    const stack = [[0, 0]]; // [i, sum]

    while (stack.length) {
        const [i, sum] = stack.pop();

        if (i === numbers.length) {
            if (sum === target) count++;
            continue;
        }

        const x = numbers[i];
        // 재귀의 두 분기를 스택 push로 치환
        stack.push([i + 1, sum + x]);
        stack.push([i + 1, sum - x]);
    }
    return count;
}