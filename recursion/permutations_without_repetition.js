/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getPermutation = function(n, k) {
    let array = "";
    for(let i=1; i<=n; i++) {
        array+= i;
    }
    let permutations = helper(array, "", 0, []);
    return permutations[k-1];
};

//Strings in JS are immutable. But need more storage.

function helper(array, slate, index, result) {
    // Base Case
    if(array.length === 0) {
        result.push(slate);
        return result;
    }
    for(let i=0; i<array.length; i++) {
        helper(array.substring(0,i)+array.substring(i+1, array.length), slate+array[i], index+1, result);
    }
    return result;
}