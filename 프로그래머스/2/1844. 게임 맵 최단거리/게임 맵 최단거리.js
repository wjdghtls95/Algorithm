function solution(maps) {
  const n = maps.length, m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const dist    = Array.from({ length: n }, () => Array(m).fill(0));
  const q = [[0, 0]];
  let head = 0;

  if (maps[0][0] === 0) return -1; // 시작이 벽이면 바로 불가

  visited[0][0] = true;
  dist[0][0] = 1;

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  while (head < q.length) {
    const [x, y] = q[head++];

    if (x === n - 1 && y === m - 1) return dist[x][y];

    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (maps[nx][ny] === 0) continue;     // 벽
      if (visited[nx][ny]) continue;        // 이미 방문

      visited[nx][ny] = true;               // ★ 큐에 넣을 때 방문 체크
      dist[nx][ny] = dist[x][y] + 1;
      q.push([nx, ny]);
    }
  }
  return -1;
}