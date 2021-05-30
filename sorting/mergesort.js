/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    merge(nums, 0, nums.length-1, 0);
    return nums;
};

function merge(array, startIndex, endIndex, level) {
    if(endIndex <= startIndex) return array;
    
    let mid = Math.floor((endIndex + startIndex)/2);
    
    merge(array, startIndex, mid, level+1);
    merge(array, mid+1, endIndex, level+1);
    
    mergeArrays(array, startIndex, mid, endIndex);    
}

function mergeArrays(array, startIndex, mid, endIndex) {
    let a1_pointer = startIndex;
    let a2_pointer = mid+1;
    let fixedMid = mid;
    let aux = [];
    
    // Combining 2 sorted arrays 
    while(a1_pointer <= fixedMid && a2_pointer <= endIndex) {
        if(array[a1_pointer] < array[a2_pointer]) {
            aux.push(array[a1_pointer]);
            a1_pointer = a1_pointer+1;
        } else {
            aux.push(array[a2_pointer]);
            a2_pointer = a2_pointer+1;  
        }
    }
    
    while(a1_pointer <= fixedMid) {
        aux.push(array[a1_pointer]);
        a1_pointer = a1_pointer+1;
    }
    
    while(a2_pointer <= endIndex) {
        aux.push(array[a2_pointer]);
        a2_pointer = a2_pointer+1;
    }
    
    // Updating the original array with the sorted auxillary
    counter=0;
    for(let i = startIndex; i <= endIndex; i++) {
        array[i] = aux[counter];
        counter = counter + 1;
    }
}