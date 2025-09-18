const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const N = input[0];
const arr = input.slice(1);

// N이 0일 일은 문제상 거의 없지만, 안전 처리
if (N <= 1) {
  console.log(0);
  process.exit(0);
}

class MinHeap {
  constructor() { this.a = []; }
  size() { return this.a.length; }
  push(x) {
    this.a.push(x);
    let i = this.a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.a[p] <= this.a[i]) break;
      [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
      i = p;
    }
  }
  pop() {
    if (this.a.length === 0) return null;
    const root = this.a[0];
    const last = this.a.pop();
    if (this.a.length) {
      this.a[0] = last;
      let i = 0;
      const n = this.a.length;
      while (true) {
        let l = i * 2 + 1, r = i * 2 + 2, s = i;
        if (l < n && this.a[l] < this.a[s]) s = l;
        if (r < n && this.a[r] < this.a[s]) s = r;
        if (s === i) break;
        [this.a[i], this.a[s]] = [this.a[s], this.a[i]];
        i = s;
      }
    }
    return root;
  }
}

const heap = new MinHeap();
for (const x of arr) heap.push(x);

let ans = 0;
while (heap.size() > 1) {
  const a = heap.pop();
  const b = heap.pop();
  const sum = a + b;
  ans += sum;      // 합칠 때의 비용 누적
  heap.push(sum);  // 새 묶음 다시 힙에 삽입
}
console.log(ans);