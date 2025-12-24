// function solution(n, computers) {
//   const visited = Array(n).fill(false);
//   let count = 0;

//   for (let i = 0; i < n; i++) {
//     if (visited[i]) continue;

//     const q = [i];
//     let head = 0;
//     visited[i] = true;

//     while (head < q.length) {
//       const cur = q[head++]; // shift 대체
//       for (let next = 0; next < n; next++) {
//         if (computers[cur][next] === 1 && !visited[next]) {
//           visited[next] = true; // 큐 넣기 전에 방문
//           q.push(next);
//         }
//       }
//     }
//     count++;
//   }
//   return count;
// }

function solution(n, computers) {
  const visited = new Set();
  let networks = 0;

  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue;

    networks++;
    const q = [i];
    let head = 0;
    visited.add(i);

    while (head < q.length) {
      const cur = q[head++];

      for (let next = 0; next < n; next++) {
        if (computers[cur][next] === 1 && !visited.has(next)) {
          visited.add(next);
          q.push(next);
        }
      }
    }
  }

  return networks;
}