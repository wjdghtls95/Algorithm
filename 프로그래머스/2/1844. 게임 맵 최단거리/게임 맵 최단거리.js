// function solution(maps) {
//   const n = maps.length, m = maps[0].length;
//   const visited = Array.from({ length: n }, () => Array(m).fill(false));
//   const dist    = Array.from({ length: n }, () => Array(m).fill(0));
//   const q = [[0, 0]];
//   let head = 0;

//   if (maps[0][0] === 0) return -1; // 시작이 벽이면 바로 불가

//   visited[0][0] = true;
//   dist[0][0] = 1;

//   const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

//   while (head < q.length) {
//     const [x, y] = q[head++];

//     if (x === n - 1 && y === m - 1) return dist[x][y];

//     for (const [dx, dy] of dirs) {
//       const nx = x + dx, ny = y + dy;
//       if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
//       if (maps[nx][ny] === 0) continue;     // 벽
//       if (visited[nx][ny]) continue;        // 이미 방문

//       visited[nx][ny] = true;               // ★ 큐에 넣을 때 방문 체크
//       dist[nx][ny] = dist[x][y] + 1;
//       q.push([nx, ny]);
//     }
//   }
//   return -1;
// }

function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    
    // 🔴 Hash Set으로 방문 체크
    const visited = new Set();
    const queue = [[0, 0, 1]]; // [row, col, distance]
    
    visited.add("0,0");
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우
    
    while (queue.length > 0) {
        const [r, c, dist] = queue.shift();
        
        // 도착 확인
        if (r === rows - 1 && c === cols - 1) {
            return dist;
        }
        
        // 4방향 탐색
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            const key = `${nr},${nc}`; // 🔴 문자열 키로 좌표 표현
            
            // 유효성 검사
            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                maps[nr][nc] === 1 &&
                !visited.has(key) // 🔴 O(1) 검색
            ) {
                visited.add(key); // 🔴 O(1) 추가
                queue.push([nr, nc, dist + 1]);
            }
        }
    }
    
    return -1; // 도달 불가
}
