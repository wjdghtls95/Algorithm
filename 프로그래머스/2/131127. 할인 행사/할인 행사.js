function solution(want, number, discount) {
    let answer = 0;

    // 각 10일 구간을 확인
    for (let startDay = 0; startDay <= discount.length - 10; startDay++) {
        // 현재 10일간의 할인 상품
        const currentWindow = discount.slice(startDay, startDay + 10);

        // 원하는 제품이 모두 있는지 확인
        let isValid = true;

        for (let i = 0; i < want.length; i++) {
            const wantedItem = want[i];
            const neededCount = number[i];

            // 현재 구간에서 해당 제품의 개수 세기
            const actualCount = currentWindow.filter(item => item === wantedItem).length;

            if (actualCount !== neededCount) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            answer++;
        }
    }

    return answer;
}

console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]))
console.log(solution(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]))