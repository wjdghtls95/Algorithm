function solution(s) {
    let answer = 0;

    let x = null;        // 현재 조각의 기준 문자
    let cntX = 0;        // x와 같은 문자 수
    let cntDiff = 0;     // x와 다른 문자 수

    for (let i = 0; i < s.length; i++) {
        if (x === null) {        // 새 조각 시작 & 초기화
            x = s[i];
            cntX = 0;
            cntDiff = 0;
        }

        if (s[i] === x) cntX++;
        else cntDiff++;

        if (cntX === cntDiff) { // 조각 종료
            answer++;
            x = null;             // 다음 글자에서 새 조각 시작하게 만들기
        }
    }

    // 끝까지 갔는데 마지막 조각이 덜 끝났으면(= x가 남아 있으면) 그것도 1개로 침
    if (x !== null) answer++;

    return answer;
}

console.log(solution("banana"))
console.log(solution("abracadabra"))
console.log(solution("aaabbaccccabba"))