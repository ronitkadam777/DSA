/*
 * Complete the 'find_integer' function below.
 *
 * The function accepts a long array as parameter.
 */
 
function find_integer(arr) {
    // Write your code here
    let result;
    let maxSize = Math.pow(2,25);
    let countArray = new Array(maxSize).fill(0);
    arr.forEach(el => {
        countArray[el] = 1;
    });
    for(let i=0; i < countArray.length; i++) {
        if(countArray[i] === 0) {
            result = i;
            break;
        }
    }
    return result;
}

