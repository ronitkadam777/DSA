/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(n_points, k) {
    
    // Write your code here
    let distanceArray = [];
    let distanceMap = new Map();
    let result = [];
    
    // Iterates over neighbouring points and creates a distance array
    // and distance map (distance[coordinates])
    for(let i=0; i < n_points.length; i++) {
        let [x2,y2] = n_points[i];
        let distance = calculateDistance(0, 0, x2, y2);
        distanceArray.push(distance);
        if(!distanceMap.has(distance)) {
            distanceMap.set(distance, [[x2, y2]]);
        } else {
            let coordinateArray = distanceMap.get(distance);
            coordinateArray.push([x2, y2]);
            distanceMap.set(distance, coordinateArray);
        }
    }
    console.log(distanceArray);
    
    // Quickselect on the distance array
    //quickSelect(distanceArray, 0, distanceArray.length-1);
    quickSelect(distanceArray, 0, distanceArray.length-1, k);
    console.log(distanceArray);
    //Post processing
    for(let i=0; i<k; i++) {
        let coordinateArray = distanceMap.get(distanceArray[i]);
        result.push(...coordinateArray);
    }
    return result.slice(0,k);
};

// Quickselect 
function quickSelect(array, startIndex, endIndex, k) {
    // Base Case
    if(startIndex >= endIndex) return;
    // Partition
    let pivotIndex = Math.floor((startIndex + endIndex)/2);
    let pivotValue = array[pivotIndex];
    swap(array, startIndex, pivotIndex);
    let leftPointer = startIndex+1;
    let rightPointer = startIndex+1;
    while(rightPointer <= endIndex) {
        if(array[rightPointer] >= pivotValue) {
            rightPointer = rightPointer + 1;
        } else {
            swap(array, leftPointer, rightPointer);
            leftPointer = leftPointer + 1;
            rightPointer = rightPointer + 1;
        }
    }
    leftPointer = leftPointer - 1;
    swap(array, leftPointer, startIndex);
    // Recursive Case
    // Note: Left pointer now points to the updated pivot location (post partitioning)
    if(leftPointer === k) {
        return;
    } else if(leftPointer < k) {
        quickSelect(array, leftPointer+1, endIndex, k);
    } else {
        quickSelect(array, startIndex, leftPointer-1, k);
    }
}

// Helper function to calculate the distance
function calculateDistance(x1, y1, x2, y2) {
    let x = Math.abs(x2-x1);
    let y = Math.abs(y2-y1);
    return Math.pow(Math.pow(x,2) + Math.pow(y,2), 0.5);
}

// Helper function to swap
function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}