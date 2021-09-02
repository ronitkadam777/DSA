/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 0; 
    let end = num;
    
    while(start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        let potentialSquare = (mid*mid);
        if(potentialSquare === num) return true;
        else if(potentialSquare < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
};