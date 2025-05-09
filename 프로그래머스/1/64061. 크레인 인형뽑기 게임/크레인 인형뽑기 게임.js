function solution(board, moves) {
    let stack = [];
    let count = 0;

    for (let move of moves) {
        let column = move - 1;  // 열 인덱스 보정

        for (let row = 0; row < board.length; row++) {
            let doll = board[row][column];
            if (doll !== 0) {
                board[row][column] = 0;  // 인형 꺼냄

                if (stack.length > 0 && stack[stack.length - 1] === doll) {
                    stack.pop(); // 같은 인형 -> 터짐
                    count += 2;
                } else {
                    stack.push(doll); // 바구니에 넣음
                }
                break; // 한 번 뽑았으면 끝
            }
        }
    }

    return count;
}