/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let pointsArray = points;
    return quickSort(points, 0, points.length -1, K-1).slice(0,K);
};

function calculateDistance(point) {
    return Math.sqrt((point[0]*point[0]) + (point[1]*point[1]));
}

function quickSort(nums, startIndex, endIndex, k) {
    //Base Case
    let targetIndex = k;
    if(startIndex >= endIndex) return nums;
    //Randomly select the pivot in the above range
    let pivotIndex = startIndex + Math.floor((endIndex - startIndex)/2);
    
    //Lomoto's Partitioning Code
    swap(nums, startIndex, pivotIndex);
    let largerPointer = startIndex;
    let smallerPointer = startIndex;
    while(largerPointer <= endIndex) {
        if(calculateDistance(nums[largerPointer]) > calculateDistance(nums[0])) {
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