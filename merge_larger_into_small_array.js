/**
arr1 has n elements in sorted order
arr2 has 2n elements in sorted order (first n populated, last n blank)

Merge the two arrays and store them in the larger array without using auxillary memory

Solution: Use endPointers to input elements from the end into the merged array
*/

function merger_first_into_second(arr1, arr2) {
    /*
     * Write your code here.
     */
     let smallRight = arr1.length-1;
     let bigRight = arr1.length-1;
     let bigEnd = arr2.length-1;
     while(smallRight >= 0 && bigRight >= 0) {
     		if(arr2[bigRight] >= arr1[smallRight]) {
        	arr2[bigEnd] = arr2[bigRight];
          bigEnd--;
          bigRight--;
        } else {
        	arr2[bigEnd] = arr1[smallRight];
          smallRight--;
          bigEnd--;
        }
     }
     if(smallRight >= 0) {
         while(smallRight === 0) {
             arr2[bigEnd] = arr1[smallRight];
             smallRight--;
             bigEnd--;
         }
     }
     if(bigRight >= 0) {
         while(bigRight === 0) {
             arr2[bigEnd] = arr1[bigRight];
             bigRight--;
             bigEnd--;
         }
     }
     console.log(arr2);
}

merger_first_into_second([1,3,5],[2,4,6,0,0,0]);