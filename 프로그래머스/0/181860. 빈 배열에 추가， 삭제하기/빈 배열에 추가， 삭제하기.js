function solution(arr, flag) {
    const X = [];

    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];

        if (flag[i]) {
            // a를 2*a 번 push
            for (let k = 0; k < a * 2; k++) X.push(a);
        } else {
            // 뒤에서 a개 제거
            X.splice(-a, a);  // -a부터 a개 삭제
        }
    }

    return X;
}