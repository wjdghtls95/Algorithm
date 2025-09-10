const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const A = new Set(input[1].split(" ").map(Number));
const M = Number(input[2]);
const B = input[3].split(" ").map(Number);

let result = B.map(x => A.has(x) ? 1 : 0);
console.log(result.join("\n"));