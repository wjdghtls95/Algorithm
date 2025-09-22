function solution(s) {
    let count = 0;   // 변환 횟수
    let removed = 0; // 제거한 0의 총 개수

    while (s !== "1") {
        // 1) 0 제거
        const zeros = (s.match(/0/g) || []).length; // '0' 갯수 세기
        removed += zeros;

        // 2) 0 제거 후 남은 문자열 길이
        const onesLength = s.length - zeros;

        // 3) 길이를 이진수로 변환
        s = onesLength.toString(2);

        count++;
    }

    return [count, removed];
}