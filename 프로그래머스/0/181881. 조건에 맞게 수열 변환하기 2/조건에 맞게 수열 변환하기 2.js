function solution(arr) {
    let count = 0;

    while (true) {
        // 변환된 새 배열
        const next = arr.map((x) => {
            if (x >= 50 && x % 2 === 0) return x / 2;
            if (x < 50 && x % 2 === 1) return x * 2 + 1;
            return x;
        });

        // 변화가 없으면 종료
        if (arr.every((v, i) => v === next[i])) {
            return count;
        }

        // 배열 업데이트
        arr = next;
        count++;
    }
}
