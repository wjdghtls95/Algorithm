let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const a = input[0];

console.log(parseInt(a, 16))