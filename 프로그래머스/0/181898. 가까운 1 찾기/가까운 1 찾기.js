function solution(arr, idx) {
    for (let i = idx; i < arr.length; i++) {
        if (arr[i] === 1) {
            return i; // 첫 번째 1의 위치 반환
        }
    }
    return -1; // 못 찾으면 -1
}