
/*
 * Complete the function below.
 */
function generate_all_subsets(s) {
    return helper(s, "", []);
}

function helper(superSet, slate, result) {
    //base
    if(superSet.length == 0) {
        result.push(slate);
        return result;
    }
    //exclude
    helper(superSet.slice(1), slate, result);
    //include
    helper(superSet.slice(1), slate + superSet[0], result);
    return result;
}

