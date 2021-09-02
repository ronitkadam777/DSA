/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let peakIndex = findPeakIndex(mountainArr);
    let check =  mountainArr.get(peakIndex);
    let resultIndex = binarySearch(mountainArr, peakIndex, target);
    if(resultIndex !== -1) {
        return resultIndex;
    } else {
        resultIndex = binarySearch2(mountainArr, peakIndex, target);
        return resultIndex;
    } 
};

function findPeakIndex(arr) {
    let start = 0;
    let end = arr.length() - 1;
    
    while(start <= end) {
        let midIndex = Math.floor(start + (end-start)/2);
        let midValue = arr.get(midIndex);
        let leftValue = arr.get(midIndex-1);
        let rightValue = arr.get(midIndex+1);
        if((midValue > leftValue) && (midValue > rightValue)) {
            return midIndex;
        } else if(midValue < rightValue) {
            start = midIndex + 1;
        } else {
            end = midIndex - 1;
        }
    }
    
}

function binarySearch(arr, peakIndex, target) {
    let start = 0;
    let end = peakIndex;
    while(start <= end) {
        let midIndex = Math.floor(start + (end-start)/2);
        let pick = arr.get(midIndex);
        if(pick === target) {
            return midIndex;
        } else if(pick < target) {
            start = midIndex + 1;
        } else {
            end = midIndex - 1;
        }
    }
    return -1;
}

function binarySearch2(arr, peakIndex, target) {
    let start = peakIndex;
    let end = arr.length() - 1;
    while(start <= end) {
        let midIndex = Math.floor(start + (end-start)/2);
        let pick = arr.get(midIndex);
        if(pick === target) {
            return midIndex;
        } else if(pick < target) {
            end = midIndex - 1;
        } else {
           start = midIndex + 1;
        }
    }
    return -1;
}