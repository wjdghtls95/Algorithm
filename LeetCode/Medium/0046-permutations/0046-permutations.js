/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
      const result = [];
    const used = Array(nums.length).fill(false);

    function dfs(path) {
        if (path.length === nums.length) {
            result.push([...path]); // 깊은 복사
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;      // 이미 사용한 숫자는 skip
            used[i] = true;
            path.push(nums[i]);

            dfs(path);

            path.pop();                 // 백트래킹 (원상복구)
            used[i] = false;
        }
    }

    dfs([]);
    return result;
};