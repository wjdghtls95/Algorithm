const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map(line => line.split("").map(Number));

const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
const dist = Array.from({ length: N }, () => Array(M).fill(0));
const q = [[0,0]];
dist[0][0] = 1; // 시작 칸도 포함

let head = 0;
while (head < q.length) {
  const [x, y] = q[head++];
  if (x === N-1 && y === M-1) {
    console.log(dist[x][y]);
    process.exit(0);
  }
  for (const [dx, dy] of dirs) {
    const nx = x + dx, ny = y + dy;
    if (nx<0 || ny<0 || nx>=N || ny>=M) continue;
    if (maze[nx][ny] === 0) continue;
    if (dist[nx][ny] > 0) continue;
    dist[nx][ny] = dist[x][y] + 1;
    q.push([nx,ny]);
  }
}