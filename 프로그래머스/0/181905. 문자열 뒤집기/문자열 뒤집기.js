function solution(my_string, s, e) {
    // 1) s 이전 부분
    const before = my_string.slice(0, s);
    // 2) s~e 구간 뒤집기
    const middle = my_string
        .slice(s, e + 1) // s~e 포함 구간 추출
        .split('')
        .reverse()
        .join('');
    // 3) e 이후 부분
    const after = my_string.slice(e + 1);

    return before + middle + after;
}