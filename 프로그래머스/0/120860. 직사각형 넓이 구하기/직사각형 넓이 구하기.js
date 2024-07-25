function solution(dots) {
    let xs = dots.map(dot => dot[0]);
    let ys = dots.map(dot => dot[1]);

    let width = Math.max(...xs) - Math.min(...xs);
    let height = Math.max(...ys) - Math.min(...ys);

    return width * height;
}