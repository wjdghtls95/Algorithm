function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const set = new Set(arr);

  if (set.size === 1) return 1111 * a; // 전부 동일

  if (set.size === 2) {
    // 3+1 또는 2+2
    const [x, y] = [...set];
    const cx = arr.filter(v => v === x).length;
    const cy = 4 - cx;
    if (cx === 3 || cy === 3) {
      const p = cx === 3 ? x : y;           // 3개
      const q = cx === 1 ? x : y;           // 1개
      return (10 * p + q) ** 2;
    } else {
      // 2+2
      return (x + y) * Math.abs(x - y);
    }
  }

  if (set.size === 3) {
    // 2+1+1 → 쌍이 아닌 두 수의 곱
    let pair;
    for (const v of set) {
      if (arr.filter(t => t === v).length === 2) pair = v;
    }
    const singles = arr.filter(v => v !== pair);
    return singles[0] * singles[1];
  }

  // 1+1+1+1
  return Math.min(...arr);
}