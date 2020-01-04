
/*
 *
Note: This is not an optimum solution as it takes O (k * n * k) time
JS doesn't have a good solution as there we need to store the elements
of one pass into an array, sort it, and pick the least. 
Complete the mergeArrays function below.
 */
function mergeArrays(arr) {
    /*
     * Write your code here.
     */
    let order = 0;
    for(let k=0; k < arr.length; k++) {
      for(let n=0; n < arr[0].length - 1; n++) {
        if(arr[k][n] < arr[k][n+1]) { order = 1;}
        else if(arr[k][n] > arr[k][n+1]) { order = -1;}
      }
    }
    let resultant = [];
    let k = arr.length;
    let n = arr[0].length * k;
    while(n > 0) {
      let checkValue = (order === 1) ? Number.MAX_VALUE: -Number.MAX_VALUE;
      let matrixIndex = 0;
      for(let i=0; i< k; i++) {
        if(arr[i].length > 0) {
             if((arr[i][0] * order) <= (checkValue * order)) {
               checkValue = arr[i][0];
               matrixIndex = i;
             }
        }
      }
      resultant.push(checkValue);
      arr[matrixIndex].shift();
      n--;
    }
  return resultant;
}