// 백준 1260: DFS와 BFS
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const N = input[idx++];     // 정점 수
const M = input[idx++];     // 간선 수
const V = input[idx++];     // 시작 정점

// 인접 리스트
const adj = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const a = input[idx++], b = input[idx++];
  adj[a].push(b);
  adj[b].push(a);
}
// 정점 번호 작은 것 먼저 방문
for (let i = 1; i <= N; i++) adj[i].sort((x, y) => x - y);

// DFS (재귀)
const visitedD = Array(N + 1).fill(false);
const dfsOrder = [];
function dfs(u) {
  visitedD[u] = true;
  dfsOrder.push(u);
  for (const v of adj[u]) {
    if (!visitedD[v]) dfs(v);
  }
}

// BFS (큐)
const visitedB = Array(N + 1).fill(false);
const bfsOrder = [];
function bfs(start) {
  const q = [start];
  visitedB[start] = true;
  for (let h = 0; h < q.length; h++) {
    const u = q[h];
    bfsOrder.push(u);
    for (const v of adj[u]) {
      if (!visitedB[v]) {
        visitedB[v] = true; // 큐에 넣을 때 방문 처리(중복 방지)
        q.push(v);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsOrder.join(' '));
console.log(bfsOrder.join(' '));