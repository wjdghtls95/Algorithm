// 백준 2606 - 바이러스 (BFS)
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let i = 0;
const N = input[i++];       // 컴퓨터 수
const M = input[i++];       // 간선 수

const adj = Array.from({ length: N + 1 }, () => []);
for (let k = 0; k < M; k++) {
  const a = input[i++], b = input[i++];
  adj[a].push(b);
  adj[b].push(a);
}

const visited = Array(N + 1).fill(false);
const q = [1];
let head = 0;
visited[1] = true;

let count = 0; // 새로 감염된 컴퓨터 수(1번 제외)

while (head < q.length) {
  const cur = q[head++];
  for (const next of adj[cur]) {
    if (!visited[next]) {
      visited[next] = true; // ★ 큐 넣기 전에 방문 처리
      q.push(next);
      count++;              // 1번 제외, 새로 감염된 이웃만 카운트
    }
  }
}

console.log(count);