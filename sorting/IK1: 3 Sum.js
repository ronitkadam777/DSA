/*
 * Complete the function below.
   1. Sort the input array
   2. For each element, choose left / right pointer as (i+1)th and last element 
   3. If sum of 3 is 0 / +ve / -ve, add to result / rightPointer-- / leftPointer++
   4. even after finding a valid value, complete checking remaining elements to find more valid combinations
   5. Should run in 0(n2) time complexity
 */
function findZeroSum(arr) {
    // Write your code here.
    let resultSet = new Set();
    let sortedList = arr.sort((a,b) => { return a-b});
    for(let i=0; i< arr.length; i++) {
        let leftPointer = i+1;
        let rightPointer = arr.length-1;
        while(leftPointer < rightPointer) {
            if(sortedList[i] + sortedList[leftPointer]+sortedList[rightPointer] === 0) {
                resultSet.add(`${sortedList[i]},${sortedList[leftPointer]},${sortedList[rightPointer]}`);
                // Still need to continue to pick more combinations that could exist [[-10 | 0, 10], [-10 | 4, 6]]
                rightPointer = rightPointer - 1;
                leftPointer = leftPointer + 1;
            } else if(sortedList[i] + sortedList[leftPointer]+sortedList[rightPointer] > 0) {
                rightPointer = rightPointer - 1;
            } else {
                leftPointer = leftPointer + 1;
            }
        }
    }
    // Convert set to array
    return [...resultSet];
}

