
/*
 * Group / Partition even numbers to the left and odd to the right
 */
function solve(arr) {
    if(arr.length < 1) return null;
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex < rightIndex) {
        if(((arr[leftIndex] % 2) !== 0) && ((arr[rightIndex] % 2) === 0)) {
            swap(arr, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
        while((arr[leftIndex] % 2) === 0 && (rightIndex > leftIndex)) {
            leftIndex++;
        }
        while((arr[rightIndex] % 2) !== 0 && (rightIndex > leftIndex)) {
            rightIndex--;
        }
    }
    return arr;
}

function swap(array, leftIndex, rightIndex) {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

