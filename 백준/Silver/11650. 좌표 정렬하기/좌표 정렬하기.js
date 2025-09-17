const fs = require('fs');
const tokens = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const n = tokens[0];
const arr = Array.from({ length: n }, (_, i) => [tokens[1 + 2*i], tokens[2 + 2*i]]);

// x 오름차순, x 같으면 y 오름차순
arr.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));

let out = arr.map(p => p[0] + ' ' + p[1]).join('\n');
console.log(out);