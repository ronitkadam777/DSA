/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = helper(nums, [], 0, []);
    return result.map(result => JSON.parse(result));
};

function helper(nums, slate, index, result) {
    if(nums.length === 0) {
        if(!result.includes(JSON.stringify(slate))) {
            result.push(JSON.stringify(slate));
        }
        return result;
    }
    for(let i=0; i<nums.length; i++) {
        slate.push(nums[i]);
        helper(nums.slice(0,i).concat(nums.slice(i+1, nums.length)), slate, index+1, result);
        slate.pop();
    }
    return result;
}