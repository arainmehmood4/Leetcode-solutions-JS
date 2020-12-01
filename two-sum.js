/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement =  target - nums[i];
        if (m.has(complement)) return [i,m.get(complement)];
        else m.set(nums[i],i);
    }
};
