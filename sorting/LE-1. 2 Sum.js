/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    let number = []
    for(let i = 0; i< nums.length; i++) {
        if(map[target - nums[i]] !== undefined) {
            number.push(map[target - nums[i]]);
            number.push(i);   
            break;
        } else {
            map[nums[i]] = i;
        }
        
    }
    return number;
};