function solution(n, computers) {
  const visited = Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    const q = [i];
    let head = 0;
    visited[i] = true;

    while (head < q.length) {
      const cur = q[head++]; // shift 대체
      for (let next = 0; next < n; next++) {
        if (computers[cur][next] === 1 && !visited[next]) {
          visited[next] = true; // 큐 넣기 전에 방문
          q.push(next);
        }
      }
    }
    count++;
  }
  return count;
}