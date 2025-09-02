function solution(clothes) {
    const map = new Map();

    // 종류별 개수 세기
    for (const [item, type] of clothes) {
        map.set(type, (map.get(type) || 0) + 1);
    }

    // 경우의 수 계산
    let answer = 1;
    for (const count of map.values()) {
        answer *= (count + 1);  // 안 입는 경우 포함
    }

    return answer - 1;  // 모두 안 입는 경우 제외
}