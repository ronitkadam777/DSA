/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Alternate Method: 

// if target and mid are on opposite sides (compare with polestar), flip to opposite (target) size; 
// if target and mid are on the same side, move towards the target by comparing target and mid values

var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let polestar = nums[end];
    
    // Corner cases:
    if(nums[start] === target) return start;
    if(nums[end] === target) return end;
    
    let targetZone = checkZone(target, polestar);
    
    while(start <= end) {
        let mid = Math.floor(start +  (end - start)/2);
        if(nums[mid] === target) return mid;
        
        // Target and Mid are in the same zones
        if(checkZone(nums[mid], polestar) === targetZone) {
            if(nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            // Target and Mid are in opposite zones
            if(targetZone === 'right') {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};

function checkZone(element, polestar) {
    if(element < polestar) return 'right';
    else return 'left';
}


/*
// Alternate Method: 

// Check if LHS is ascending zone, if target lies within range then focus on left else right; 
// else if RHS is ascending zone, if target lies within range then focus on right else left

var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        
        if(nums[mid] === target) return mid;
        
        // Check if LHS is a valid zone 
        if(nums[start] <= nums[mid]) {
            if((nums[start] <= target) && (target <= nums[mid])) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } // Check if RHS is a valid zone
        else if(nums[mid] <= nums[end]) {
            if((nums[mid] <= target)  && (target <= nums[end])) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};
*/