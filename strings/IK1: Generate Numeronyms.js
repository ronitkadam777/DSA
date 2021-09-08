/*
 * Complete the neuronyms function below.
 */
let result;
function neuronyms(word) {
    /*
     * Write your code here.
     */
    result = [];
    for(let i=1; i < word.length; i++) {
        for(let j=i+2; j < word.length; j++) {
            result.push(`${word.substring(0, i)}${j-i}${word.substring(j, word.length)}`);
        }
    }
    return result;
}

