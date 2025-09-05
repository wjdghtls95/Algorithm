/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const cnt = new Map();

    // 1) magazine 글자 수 세기
    for (const ch of magazine) {
        cnt.set(ch, (cnt.get(ch) ?? 0) + 1); // 0을 보존하려고 ?? 사용
    }

    // 2) ransomNote 필요 글자 소비
    for (const ch of ransomNote) {
        const left = (cnt.get(ch) ?? 0) - 1; // 없으면 0에서 -1
        if (left < 0) return false; // 재고 부족 → 실패
        cnt.set(ch, left);
    }
    return true;
};