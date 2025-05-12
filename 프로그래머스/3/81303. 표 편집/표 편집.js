function solution(n, k, cmd) {
    const prev = Array(n).fill(0).map((_, i) => i - 1);
    const next = Array(n).fill(0).map((_, i) => i + 1);
    const removed = [];
    const alive = Array(n).fill(true);

    for (const c of cmd) {
        const [op, valStr] = c.split(" ");
        const val = Number(valStr);

        if (op === "U") k = up(k, val, prev);
        else if (op === "D") k = down(k, val, next);
        else if (op === "C") k = removeRow(k, prev, next, removed, alive, n);
        else if (op === "Z") restoreRow(removed, prev, next, alive, n);
    }

    return alive.map(v => v ? "O" : "X").join("");
}

/**
 * @param k - 현재위치
 * @param val - 이동할_칸_수
 * @param prev - 각_행의_'이전_행'_인덱스를_담은_배열
 */
function up(k, val, prev) {
    while(val--) {
        k = prev[k]
    }

    return k
}

/**
 * @param k - 현재위치
 * @param val - 이동할_칸_수
 * @param prev - 각_행의_'이전_행'_인덱스를_담은_배열
 */
function down(k, val, next) {
    while(val--) {
        k = next[k]
    }

    return k;
}

/**
 *
 * @param k: 현재위치
 * @param prev
 * @param next
 * @param removed: 삭제된 정보저장
 * @param alive: 살아있는 상태 표시
 * @param n: 행 개수
 */
function removeRow(k, prev, next, removed, alive, n) {
    removed.push([k, prev[k], next[k]])
    alive[k] = false;

    if (prev[k] !== -1) next[prev[k]] = next[k]

    if (next[k] !== n) prev[next[k]] = prev[k]

    return next[k] === n ? prev[k] : next[k]
}

function restoreRow(removed, prev, next, alive, n) {
    const [r, p, n_] = removed.pop();
    alive[r] = true;

    if (p !== -1) next[p] = r;
    if (n_ !== n) prev[n_] = r;
}