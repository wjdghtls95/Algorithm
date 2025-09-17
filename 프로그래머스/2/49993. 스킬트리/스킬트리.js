function solution(skill, skill_trees) {
  let count = 0;

  for (const tree of skill_trees) {
    let idx = 0;
    let valid = true;

    for (const ch of tree) {
      const pos = skill.indexOf(ch);
      if (pos === -1) continue;
      if (pos === idx) idx++;
      else { 
        valid = false; // 위반
        break;         // 안쪽 루프 종료
      }
    }

    if (valid) count++;
  }
  return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); 