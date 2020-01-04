/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    nums.forEach(num => {
        if(!map[num]) map[num] = 1;
        else map[num] = map[num] + 1;
    });
    let freqArray = Object.values(map);
    let freqArrayLength = freqArray.length;
    let arr = quickSort(freqArray, 0, freqArrayLength-1, k).reverse().slice(0,k);
    let resultant = [];
    Object.keys(map).forEach(num => {
       if(arr.indexOf(map[num]) !== -1) {
           let numerical = parseInt(num);
           resultant.push(numerical);
       }
    });
    return resultant;
};

function quickSort(nums, startIndex, endIndex, k) {
    //Base Case
    let targetIndex = (nums.length - k);
    if(startIndex >= endIndex) return nums;
    //Randomly select the pivot in the above range
    let pivotIndex = startIndex + Math.floor((endIndex - startIndex)/2);
    
    //Lomoto's Partitioning Code
    swap(nums, startIndex, pivotIndex);
    let largerPointer = startIndex;
    let smallerPointer = startIndex;
    while(largerPointer <= endIndex) {
        if(nums[largerPointer] > nums[startIndex]) {
            largerPointer++;
        } else {
            swap(nums, smallerPointer, largerPointer);
            smallerPointer++;
            largerPointer++;
        }
    }
    smallerPointer = smallerPointer - 1;
    swap(nums, smallerPointer, startIndex);
    pivotIndex = smallerPointer;
    if(pivotIndex === targetIndex) {
        return nums;
    } else if(pivotIndex < targetIndex) {
        quickSort(nums, pivotIndex+1, endIndex, k);
    } else {
        quickSort(nums, startIndex, pivotIndex-1, k);
    }
    return nums;
}

function swap(nums, firstIndex, secondIndex) {
    if(nums[firstIndex] !== nums[secondIndex]) {
        let temp = nums[firstIndex];
        nums[firstIndex] = nums[secondIndex];
        nums[secondIndex] = temp;   
    }
}