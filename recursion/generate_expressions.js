
/*
 * Complete the function below.
 */
function generate_all_expressions(s, target) {
    return helper(s, target, 1, s[0], []);
}

function helper(s, target, index, evalSoFar, result) {
    /*if(eval(evalSoFar) > target) {
        return result;
    }*/
    if(s.length == index) {
        if(eval(evalSoFar) == target) {
            result.push(evalSoFar);
        }
        return result;
    }
    helper(s, target, index + 1, `${evalSoFar}+${s[index]}`, result);
    helper(s, target, index + 1, `${evalSoFar}*${s[index]}`, result);
    helper(s, target, index + 1, `${evalSoFar}${s[index]}`, result);
    return result;
}

