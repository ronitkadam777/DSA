/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    if(arr[0] > arr[1]) return 0;
    
    while(start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        let slope = checkSlope(arr, mid);
        if(slope === 0) {
            return mid;
        } else if(slope === 1) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};

function checkSlope(arr, index) {
     if((arr[index] > arr[index+1]) && (arr[index] > arr[index-1])) return 0;
     else if(arr[index] < arr[index+1]) return 1;
     else return -1;
}