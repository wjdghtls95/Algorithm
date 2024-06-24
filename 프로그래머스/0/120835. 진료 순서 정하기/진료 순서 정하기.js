function solution(emergency) {
    let sorted = emergency.slice().sort((a, b)=> b - a);
    return emergency.map((it) => sorted.indexOf(it)+1);

}