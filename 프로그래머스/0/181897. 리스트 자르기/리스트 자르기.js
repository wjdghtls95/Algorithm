function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;

    if (n === 1) {
        return num_list.slice(0, b + 1);
    } else if (n === 2) {
        return num_list.slice(a);
    } else if (n === 3) {
        return num_list.slice(a, b + 1);
    } else if (n === 4) {
        // 간격 c 적용 → slice 후 filter로 인덱스 맞춰 걸러내기
        return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
    }
}