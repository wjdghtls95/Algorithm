function solution(brown, yellow) {
  for (let hIn = 1; hIn * hIn <= yellow; hIn++) {
    if (yellow % hIn !== 0) continue;
    const wIn = yellow / hIn;

    const W = wIn + 2;
    const H = hIn + 2;

    if (2 * W + 2 * H - 4 === brown) {
      return W >= H ? [W, H] : [H, W];
    }
  }
  return [];
}