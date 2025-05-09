function solution(prices) {
    const stack = []

    for(let i = 0; i < prices.length; i++) {
        let time = 0;

        for (let j = i + 1; j < prices.length; j++) {
            time++

            if(prices[j] < prices[i]) {
                break;
            }
        }
        stack.push(time)
    }
    return stack
}