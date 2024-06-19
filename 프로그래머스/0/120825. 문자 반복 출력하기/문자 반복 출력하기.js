 function solution(string, n) {
      const result = [];
     
      for (const it of [...string]) {
        const a = it.repeat(n);
        result.push(a);
      }

      return result.join('');
    }