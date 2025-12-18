function solution(s, skip, index) {
    const skipSet = new Set(skip.split(""));
    let answer = "";

    for (const ch of s) {
        let code = ch.charCodeAt(0); // 97~122
        let moved = 0;

        while (moved < index) {
            code++;
            if (code > 122) code = 97; // z -> a

            const next = String.fromCharCode(code);
            if (!skipSet.has(next)) moved++;
        }

        answer += String.fromCharCode(code);
    }

    return answer;
}