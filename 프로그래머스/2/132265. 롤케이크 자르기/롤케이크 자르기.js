function solution(topping) {
    let answer = 0;

    // 오른쪽 토핑들 미리 세기
    const right = new Map();
    for (const t of topping) {
        right.set(t, (right.get(t) || 0) + 1);
    }

    // 왼쪽은 빈 Set에서 시작
    const left = new Set();

    // 하나씩 왼쪽으로 옮기면서 비교
    for (let i = 0; i < topping.length; i++) {
        const curr = topping[i];

        left.add(curr);                          // 왼쪽에 추가
        right.set(curr, right.get(curr) - 1);   // 오른쪽에서 빼기
        if (right.get(curr) === 0) {
            right.delete(curr);                  // 0개면 삭제
        }

        if (left.size === right.size) answer++; // 개수 같으면 카운트
    }

    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]))
console.log(solution([1, 2, 3, 1, 4]))
