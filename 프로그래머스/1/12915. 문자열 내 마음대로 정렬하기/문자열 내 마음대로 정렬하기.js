function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a.localeCompare(b); // n번째 글자가 같으면 전체 문자열 사전순
        }
        return a[n].localeCompare(b[n]); // n번째 글자 기준 정렬
    });
}

console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))