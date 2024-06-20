function solution(n, k) {
      const lamb = 12000;
      const beverage = 2000;

      const sale = Math.floor(n / 10);

      const result = n * lamb + k * beverage - sale * beverage;

      return result;
    }