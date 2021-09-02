/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 0;
    let end = Number.MAX_VALUE;
    while(start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        let result = guess(mid);
        if(result === 0) {
            return mid;
        } else if(result === 1) {
            start = mid + 1;
        } else {
            end = mid -1;
        }
    }
    
};