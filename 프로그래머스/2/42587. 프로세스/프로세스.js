function solution(priorities, location) {
  // 큐: [priority, index]
  const q = priorities.map((p, i) => [p, i]);
  let printed = 0;

  while (q.length) {
    const [p, i] = q.shift();                     // 큐 앞에서 꺼냄
    const hasHigher = q.some(([pp]) => pp > p);   // 뒤에 더 큰 우선순위가 있는가?
    if (hasHigher) {
      q.push([p, i]);                             // 있으면 뒤로 보냄
    } else {
      printed++;                                  // 실행
      if (i === location) return printed;         // 목표면 몇 번째인지 반환
    }
  }
}