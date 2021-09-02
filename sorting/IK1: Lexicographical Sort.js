/*
 * Complete the solve function below.
 */
function solve(arr) {
    /*
     * Write your code here.
     */
    let resultMap = new Map();
    let result = [];
    arr.forEach(input => {
        let [key, value] = input.split(' ');
        if(resultMap.has(key)) {
            let updatedString = '';
            let [originalCount, originalValue] = resultMap.get(key).split(','); 
            let updatedCount = +originalCount + 1;
            if(value > originalValue) updatedString = `${updatedCount},${value}`;
            else updatedString = `${updatedCount},${originalValue}`;
            resultMap.set(key, updatedString);
        } else {
            resultMap.set(key, `1,${value}`);
        }
    });
    for(let [key, value] of resultMap.entries()) {
        result.push(`${key}:${value}`);
    }
    return result;
}

