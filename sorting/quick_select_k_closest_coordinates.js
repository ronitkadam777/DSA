/*
 * Complete the 'nearest_neighbours' function below.
 *
 * The function accepts integer p_x, p_y, k and a 2D integer array n_points as parameter.
 */

function nearest_neighbours(p_x, p_y, k, n_points) {
    // Write your code here
    let origin_x = p_x;
    let origin_y = p_y;
    let result = [];
    
    
    // Quickselect on the distance array
    quickSelect(n_points, 0, n_points.length-1, k, origin_x, origin_y);
    return n_points.slice(0,k);
}

function quickSelect(array, startIndex, endIndex, k, origin_x, origin_y) {
    // Base Case
    if(startIndex >= endIndex) return;
    // Partition
    let pivotIndex = Math.floor((startIndex + endIndex)/2);
    let [pivotValue_x, pivotValue_y] = array[pivotIndex];
    swap(array, startIndex, pivotIndex);
    let leftPointer = startIndex+1;
    let rightPointer = startIndex+1;
    let pivotDistanceFromOrigin = calculateDistance(origin_x, origin_y, pivotValue_x, pivotValue_y);
    while(rightPointer <= endIndex) {
        // Calculate the distance of the coordinates from the origin and swap the coordinates on the fly
        // instead of maintaining a distance array
        if(calculateDistance(origin_x, origin_y, array[rightPointer][0], array[rightPointer][1]) >= pivotDistanceFromOrigin) {
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
        quickSelect(array, leftPointer+1, endIndex, k, origin_x, origin_y);
    } else {
        quickSelect(array, startIndex, leftPointer-1, k, origin_x, origin_y);
    }
}


// Helper function to calculate the distance
function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)));
}

// Helper function to swap
function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
