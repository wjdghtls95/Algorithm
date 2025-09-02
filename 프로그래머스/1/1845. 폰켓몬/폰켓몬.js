function solution(nums) {
    const counts = new Set(nums).size
    const limit = nums.length / 2

    return Math.min(counts, limit)


}