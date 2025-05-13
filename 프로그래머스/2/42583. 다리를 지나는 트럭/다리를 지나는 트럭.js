class Queue {
    items = [];
    front = 0;
    rear = 0;

    constructor(array = []) {
        this.items = array;
        this.rear = array.length;
    }

    enqueue(item) {
        this.items[this.rear++] = item;
    }

    dequeue() {
        return this.items[this.front++];
    }

    size() {
        return this.rear - this.front;
    }

    peek() {
        return this.items[this.front];
    }

    isEmpty() {
        return this.size() === 0;
    }
}

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let totalWeight = 0;

    // 다리 위 상태를 관리할 큐 (초기에는 0으로 채움)
    const bridge = new Queue(Array(bridge_length).fill(0));

    // 다음에 올릴 트럭 인덱스
    let idx = 0;

    while (!bridge.isEmpty()) {
        time++;

        // 다리에서 트럭 1대 내림
        const out = bridge.dequeue();
        totalWeight -= out;

        if (idx < truck_weights.length) {
            const nextTruck = truck_weights[idx];

            if (totalWeight + nextTruck <= weight) {
                bridge.enqueue(nextTruck);
                totalWeight += nextTruck;
                idx++;
            } else {
                bridge.enqueue(0); // 빈 공간
            }
        }
    }

    return time;
}