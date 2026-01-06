function solution(new_id) {
    let id = new_id;

    // 대문자 -> 소문자
    id = id.toLowerCase();

    // 허용 문자만 남기기
    id = id.replace(/[^a-z0-9\-_.]/g, "");

    // 마침표 2번 이상 -> 1번
    id = id.replace(/\.{2,}/g, ".");

    // 처음/끝 마침표 제거
    id = id.replace(/^\.|\.$/g, "");

    // 빈 문자열이면 "a"
    if (id.length === 0) id = "a";

    // 길이 16 이상이면 15까지만 + 끝 마침표 제거
    if (id.length >= 16) {
        id = id.slice(0, 15);
        id = id.replace(/\.$/, "");
    }

    // 길이 2 이하면 마지막 문자 반복해서 길이 3 만들기
    while (id.length < 3) {
        id += id[id.length - 1];
    }

    return id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"))
console.log(solution("z-+.^."))
console.log(solution("=.="))
console.log(solution("123_.def"))
console.log(solution("abcdefghijklmn.p"))