function solution(my_string) {
    // 0~25: 'A'~'Z', 26~51: 'a'~'z'
    const counts = new Array(52).fill(0);

    for (const ch of my_string) {
        const code = ch.charCodeAt(0);

        // 'A'(65) ~ 'Z'(90)
        if (code >= 65 && code <= 90) {
            counts[code - 65]++;
            continue;
        }

        // 'a'(97) ~ 'z'(122)
        if (code >= 97 && code <= 122) {
            counts[26 + (code - 97)]++;

        }
    }

    return counts;
}