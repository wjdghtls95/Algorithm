function solution(park, routes) {
    const R = park.length;
    const C = park[0].length;

    // 1. 시작 위치 찾기
    let sr = 0, sc = 0;
    for (let r = 0; r < R; r++) {
        const c = park[r].indexOf("S");
        if (c !== -1) { sr = r; sc = c; break; }
    }

    // 2. 방향 벡터
    const dir = {
        N: [-1, 0],
        S: [ 1, 0],
        W: [ 0,-1],
        E: [ 0, 1],
    };

    // 3. 명령 처리(시뮬레이션)
    for (const route of routes) {
        const [d, kStr] = route.split(" ");
        const k = Number(kStr);
        const [dr, dc] = dir[d];

        // 이번 명령을 가정한 임시 위치
        let nr = sr;
        let nc = sc;
        let ok = true;

        // 한 칸씩 검증(중간에 막히면 명령 전체 취소)
        for (let step = 1; step <= k; step++) {
            nr += dr;
            nc += dc;

            if (nr < 0 || nr >= R || nc < 0 || nc >= C) { ok = false; break; }
            if (park[nr][nc] === "X") { ok = false; break; }
        }

        if (ok) { sr = nr; sc = nc; } // 끝까지 통과하면 갱신
    }

    return [sr, sc];
}

console.log(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"]))
console.log(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"]))
console.log(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]))