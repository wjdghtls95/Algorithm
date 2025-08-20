function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === 'l') {
      // 'l'을 만나면 왼쪽 부분 반환
      return str_list.slice(0, i);
    }
    if (str_list[i] === 'r') {
      // 'r'을 만나면 오른쪽 부분 반환
      return str_list.slice(i + 1);
    }
  }
  // 끝까지 l, r을 못 만났다면 빈 배열
  return [];
}