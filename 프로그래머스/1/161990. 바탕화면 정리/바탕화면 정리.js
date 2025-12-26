function solution(wallpaper) {
  let minR = Infinity, minC = Infinity;
  let maxR = -1, maxC = -1;

  for (let r = 0; r < wallpaper.length; r++) {
    for (let c = 0; c < wallpaper[0].length; c++) {
      if (wallpaper[r][c] === "#") {
        minR = Math.min(minR, r);
        minC = Math.min(minC, c);
        maxR = Math.max(maxR, r);
        maxC = Math.max(maxC, c);
      }
    }
  }

  return [minR, minC, maxR + 1, maxC + 1]; // 끝 좌표는 +1
}
