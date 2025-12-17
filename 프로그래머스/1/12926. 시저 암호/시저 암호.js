function solution(s, n) {
   n %= 26; // 안전: 26의 배수면 원위치
    let out = '';
    for (const ch of s) {
        const c = ch.charCodeAt(0);
        if (c >= 65 && c <= 90) {        // 'A'~'Z'
            const base = 65;
            out += String.fromCharCode(base + ((c - base + n) % 26));
        } else if (c >= 97 && c <= 122) { // 'a'~'z'
            const base = 97;
            out += String.fromCharCode(base + ((c - base + n) % 26));
        } else {
            out += ch;                      // 공백/기타는 그대로
        }
    }
    return out;
}