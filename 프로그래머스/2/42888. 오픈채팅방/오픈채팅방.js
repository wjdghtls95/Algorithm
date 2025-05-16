function solution(record) {
  const userMap = new Map(); // uid → nickname
  const logs = [];

  for (const line of record) {
    const [cmd, uid, nickname] = line.split(" ");

    if (cmd === "Enter" || cmd === "Change") {
      userMap.set(uid, nickname); // 닉네임 갱신
    }

    if (cmd === "Enter") {
      logs.push([uid, "들어왔습니다."]);
    } else if (cmd === "Leave") {
      logs.push([uid, "나갔습니다."]);
    }
  }

  // 최종 닉네임 기준 메시지 생성
  return logs.map(([uid, msg]) => `${userMap.get(uid)}님이 ${msg}`);
}