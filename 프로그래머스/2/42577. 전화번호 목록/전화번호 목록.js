function solution(phone_book) {
    const set = new Set(phone_book);

    for (const num of phone_book) {
        let prefix = "";
        for (let i = 0; i < num.length - 1; i++) { // 자기 자신 접두어 제외 하고 순회
            prefix += num[i];
            if (set.has(prefix)) {
                return false; // 접두어 발견
            }
        }
    }
    return true;
}