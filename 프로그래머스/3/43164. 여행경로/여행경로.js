function solution(tickets) {
    // 1. 도착지를 기준으로 티켓 정렬 (재귀 방식과 동일)
    tickets.sort((a, b) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });

    const n = tickets.length;
    const visited = new Array(n).fill(false);
    let answer = [];

    // 2. DFS 탐색을 위한 스택
    const stack = [];
    stack.push(["ICN", ["ICN"], visited.slice()]); // [현재 공항, 현재까지의 경로, 방문 배열]

    while (stack.length > 0) {
        const [currentAirport, path, currentVisited] = stack.pop();

        // 모든 티켓을 사용한 경로를 찾았다면
        if (path.length === n + 1) {
            answer = path;
            break; // 반복문 종료
        }

        // 다음 티켓 탐색
        for (let i = n - 1; i >= 0; i--) {
            if (!currentVisited[i] && tickets[i][0] === currentAirport) {
                const nextVisited = currentVisited.slice();
                nextVisited[i] = true;

                // 스택에 다음 상태를 push
                stack.push([tickets[i][1], [...path, tickets[i][1]], nextVisited]);
            }
        }
    }

    return answer;
}