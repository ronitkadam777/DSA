/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length === 1) return nums;
    //nums = [-2,3,-5];
    return mergeHelper(nums, 0, nums.length-1);
};

function mergeHelper(array, startIndex, endIndex) {
    if(startIndex >= endIndex) return;
    var midIndex = startIndex + Math.floor((endIndex-startIndex)/2);
    mergeHelper(array, startIndex, midIndex);
    mergeHelper(array, midIndex+1, endIndex);
    merge(array, startIndex, midIndex, endIndex);
    return array;
}

function merge(array, startIndex, midIndex, endIndex) {
    //[5,4], 0 0 1
    var auxillaryArray = new Array(endIndex - startIndex + 1);
    //Size:2
    //First Array runs from startIndex until midIndex
    //Second Array runs from midIndex+1 until endIndex
    let firstStart = startIndex;
    const firstEnd = midIndex;
    let secondStart = midIndex+1;
    let auxCounter = 0;
    
    while(startIndex <= midIndex && secondStart <= endIndex) {
        if(array[startIndex] <= array[secondStart]) {
            auxillaryArray[auxCounter] = array[startIndex];
            startIndex++;
            auxCounter++;
        } else {
            auxillaryArray[auxCounter] = array[secondStart];
            secondStart++;
            auxCounter++;
        }        
    }
    while(startIndex <= firstEnd) {
        auxillaryArray[auxCounter] = array[startIndex];
        startIndex++;
        auxCounter++;
    }
    while(secondStart <= endIndex) {
        auxillaryArray[auxCounter] = array[secondStart];
        secondStart++;
        auxCounter++;
    }
    for(let i = 0; i < auxillaryArray.length; i++) {
        array[firstStart] = auxillaryArray[i];
        firstStart++;
    }
}