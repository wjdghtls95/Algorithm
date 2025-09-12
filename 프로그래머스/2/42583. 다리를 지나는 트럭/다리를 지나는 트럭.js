function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let currentWeight = 0;
    const waiting = [...truck_weights];
    const bridge = Array(bridge_length).fill(0); // 다리 큐 (처음엔 빈칸)

    while (bridge.length > 0) {
        time++;

        // 1. 맨 앞 트럭 나감
        currentWeight -= bridge.shift();

        // 2. 다음 트럭 올릴 수 있는지 확인
        if (waiting.length > 0) {
            const nextTruck = waiting[0];
            if (currentWeight + nextTruck <= weight) {
                // 올릴 수 있음
                waiting.shift();
                bridge.push(nextTruck);
                currentWeight += nextTruck;
            } else {
                // 무게 초과 → 빈칸만 채움
                bridge.push(0);
            }
        }
    }

    return time;
}