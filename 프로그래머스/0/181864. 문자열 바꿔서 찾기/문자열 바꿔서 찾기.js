function solution(myString, pat) {
    let changed = '';
    for (const ch of myString) {
        changed += (ch === 'A') ? 'B'
            : (ch === 'B') ? 'A'
                : ch;
    }
    return changed.includes(pat) ? 1 : 0;
}