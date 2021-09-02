/**
 * @param {number[]} arr
 * @return {boolean}
 */

/*
LOGIC: 
    Check valid consecutive elements for ascending slope
        If any horizontal then false;
        If no descent detected till the end then false;
       
    [continue... ]
    
    Check valid consecutive elements for descending slope
        If descent not detected then false;
        
    valid mountain array 
*/

let mountainArray;
var validMountainArray = function(arr) {
    mountainArray = false;
    if(arr.length < 3) return mountainArray;
    if(arr[0] > arr[1]) return mountainArray;
    helper(arr);
    return mountainArray;
};

function helper(arr) {
    let index = 0;
    while(index < arr.length-1) {
        if(arr[index] < arr[index+1]) {
            index = index + 1;
        } else if(arr[index] === arr[index+1]) {
            return;
        } else {
            break;
        }
    }
    
    if(index === arr.length-1) return;
    
    while(index < arr.length-1) {
        if(arr[index] > arr[index+1]) {
            index = index + 1;
        } else {
            return;
        }
    }
    
    mountainArray = true;
    return;
}

