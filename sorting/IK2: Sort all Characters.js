/*
 * Complete the 'sort_array' function below.
 *
10
a
s
d
f
g
*
&
!
z
y
 * The function accepts Character Array arr as parameter.
 */
 
/*
ASCII Values (total 0-128 codes):
0-32 are control 

48-57 are numericals (0-9)
65-90 are capital letters
97-122 are small caps

*/

/*
    Space Efficient Solution:
    Array of characters is converted to ASCII values in place;
    ASCII Values are sorted and then re-converted back to characters in place.
*/
function sort_array(arr) {
    // Write your code here
    arr = arr.map(el => el.charCodeAt());
    arr.sort((a,b) => { return a-b});
    arr = arr.map(el => String.fromCharCode(el));
    return arr;
}

/*
    Time Efficient Solution
    Convert array of characters in ASCII values and generated a counting array (every index represents ASCII value).
    Loop on the counting array to regenerate result by recoverting corresponding indices into char values
*/
/*
function sort_array(arr) {
    // Write your code here
    let result = [];
    let countingArray = new Array(128).fill(0);
    arr.forEach((el, index) => {
        countingArray[el.charCodeAt()]++;
    });
    arr.length = 0;
    countingArray.forEach((count, index) => {
        if(count) {
            let charValue = String.fromCharCode(index);
            for(let k=0; k<count; k++) {
                arr.push(charValue);
            }
            
        }
    });
    return arr;
}
*/

