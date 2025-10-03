function solution(arr1, arr2) {
    const n = arr1.length;
    const m = arr2[0].length;
    const k = arr2.length;

    let answer = [[]];  // ✅ [[]]로 시작

    for (let i = 0; i < n; i++) {
        answer[i] = [];  // ✅ 각 행을 동적으로 생성
        
        for (let j = 0; j < m; j++) {
            let sum = 0;
            for (let k_idx = 0; k_idx < k; k_idx++) {
                sum += arr1[i][k_idx] * arr2[k_idx][j];
            }
            answer[i][j] = sum;  // ✅ 직접 할당
        }
    }

    return answer;
}