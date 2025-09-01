function solution(n) {
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]]; // 우, 하, 좌, 상
    let x = 0, y = 0, d = 0;

    for (let num = 1; num <= n * n; num++) {
        arr[x][y] = num;

        // 다음 위치 계산
        let nx = x + dirs[d][0];
        let ny = y + dirs[d][1];

        // 범위를 벗어나거나 이미 채워진 칸이면 방향 전환
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || arr[nx][ny] !== 0) {
            d = (d + 1) % 4; // 방향 바꾸기
            nx = x + dirs[d][0];
            ny = y + dirs[d][1];
        }

        x = nx;
        y = ny;
    }

    return arr;
}