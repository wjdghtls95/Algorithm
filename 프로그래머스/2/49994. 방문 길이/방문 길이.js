function updateLocation(x, y, dir) {
    switch (dir) {
        case "U":
            return [x, y + 1];
        case "D":
            return [x, y - 1];
        case "R":
            return [x + 1, y];
        case "L":
            return [x - 1, y]
    }
}

/**
 * 이동가능한 좌표인지 체크 함수
 * @param nx
 * @param ny
 * @returns {boolean}
 */
function isValidMove(nx, ny) {
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <=5
}

/**
 * @param dirs :  'U', 'D', 'R', 'L' 만 들어있는 string
 */
function solution(dirs) {
    let x = 0;
    let y = 0;

    const visited = new Set()

    for(const dir of dirs) {

        const [nx, ny] = updateLocation(x, y, dir)

        if(!isValidMove(nx, ny)) {
            continue
        }

        visited.add(`${x},${y}->${nx},${ny}`);
        visited.add(`${nx},${ny}->${x},${y}`);

        [x, y] = [nx, ny]
    }

    return visited.size / 2
}