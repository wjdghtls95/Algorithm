const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().toUpperCase();

function solution(word) {
  const map = new Map();

  for (const ch of word) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  const max = Math.max(...map.values());
  const candidates = [...map].filter(([_, v]) => v === max);

  if (candidates.length > 1) return "?";
  return candidates[0][0];
}

console.log(solution(input));