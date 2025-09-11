function solution(n, lost, reserve) {
  // 1) 정렬 (일관된 처리)
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 2) 교집합 제거 (자기 걸 잃고 여벌도 있었던 학생은 그냥 1벌 보유)
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);
  for (const s of lost) {
    if (reserveSet.has(s)) {
      lostSet.delete(s);
      reserveSet.delete(s);
    }
  }

  // 3) 그리디 매칭: 앞 → 뒤 순서로 빌리기 시도
  for (const s of [...lostSet].sort((a, b) => a - b)) {
    if (reserveSet.has(s - 1)) {
      reserveSet.delete(s - 1);
      lostSet.delete(s);
    } else if (reserveSet.has(s + 1)) {
      reserveSet.delete(s + 1);
      lostSet.delete(s);
    }
  }

  // 참여 가능한 학생 = 전체 - 아직도 못 빌린 lost 인원
  return n - lostSet.size;
}