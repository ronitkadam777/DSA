/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let endIndex = nums.length-1;
    helper(nums, 0, nums.length-1);
    return nums;
};

function helper(nums, startIndex, endIndex) {
    if(startIndex >= endIndex) return;
    let midIndex = startIndex + Math.floor((endIndex-startIndex)/2);
    helper(nums, startIndex, midIndex);
    helper(nums, midIndex+1, endIndex);
    merge(nums, startIndex, midIndex+1, endIndex);
}

function merge(nums, startIndex, midIndex, endIndex) {
    let aux = new Array();
    let _midIndex = midIndex;
    let _startIndex = startIndex;
    while((startIndex < _midIndex) && (midIndex <= endIndex)) {
        if(nums[startIndex] < nums[midIndex]) {
            aux.push(nums[startIndex]);
            startIndex = startIndex + 1;
        } else {
            aux.push(nums[midIndex]);
            midIndex = midIndex + 1;
        }
    }
    
    while(startIndex < _midIndex) {
        aux.push(nums[startIndex]);
        startIndex = startIndex + 1;
    }
    
    while(midIndex <= endIndex) {
        aux.push(nums[midIndex]);
        midIndex = midIndex + 1;
    }

    for(let i=0; i < aux.length; i++) {
        nums[_startIndex] = aux[i];
        _startIndex = _startIndex+1;
    }
}