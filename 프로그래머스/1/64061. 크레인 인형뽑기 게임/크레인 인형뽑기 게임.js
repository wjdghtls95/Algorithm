function solution(board, moves) {
    const basket = [];
    let burst = 0;

    for (const m of moves) {
        const col = m - 1;

        // 위에서부터 내려오며 0 아닌 인형 찾기
        for (let row = 0; row < board.length; row++) {
            const doll = board[row][col];
            if (doll === 0) continue;

            // 인형 집는다
            board[row][col] = 0;

            // 바구니 처리
            if (basket.length && basket[basket.length - 1] === doll) {
                basket.pop();
                burst += 2;
            } else {
                basket.push(doll);
            }
            break; // 이 move는 처리 끝
        }
    }

    return burst;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))