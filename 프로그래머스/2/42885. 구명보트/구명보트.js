function solution(people, limit) {
  people.sort((a, b) => a - b); // 오름차순
  let left = 0;                      // 가장 가벼운 사람
  let right = people.length - 1;     // 가장 무거운 사람
  let boats = 0;

  while (left <= right) {
    // 같이 탈 수 있으면 태운다 (가벼운 + 무거운)
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      // 못 태우면 무거운 사람 혼자 보냄
      right--;
    }
    boats++; // 보트 한 대 사용
  }
  return boats;
}