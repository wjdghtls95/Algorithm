function solution(want, number, discount) {
    let answer = 0;
    const wantMap = new Map();
    const windowSize = 10; // 👈 여기가 핵심

    // 1. 내가 원하는 장바구니 세팅
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    const windowMap = new Map();

    // 2. 처음 windowSize일 세팅
    for (let i = 0; i < windowSize; i++) {
        const item = discount[i];
        windowMap.set(item, (windowMap.get(item) || 0) + 1);
    }

    // 3. 비교 함수
    const isMatch = () => {
        for (const [product, count] of wantMap.entries()) {
            if (windowMap.get(product) !== count) return false;
        }
        return true;
    };

    if (isMatch()) answer++;

    // 4. 슬라이딩 윈도우 진행
    for (let i = windowSize; i < discount.length; i++) {
        const outItem = discount[i - windowSize];
        const inItem = discount[i];

        windowMap.set(outItem, windowMap.get(outItem) - 1);
        if (windowMap.get(outItem) === 0) windowMap.delete(outItem);

        windowMap.set(inItem, (windowMap.get(inItem) || 0) + 1);

        if (isMatch()) answer++;
    }

    return answer;
}