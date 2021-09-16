/*
 * Complete the move_letters_to_left_side_with_minimizing_memory_writes function below.
 */
function move_letters_to_left_side_with_minimizing_memory_writes(s) {
    /*
     * Write your code here.
     */
    let charArray = s.split('');
    let numIndex = 0;
    let alphabetIndex = 0;
    while(alphabetIndex < charArray.length) {
        //If encounter an alphabet
        if(isNaN(charArray[alphabetIndex])) {
            charArray[numIndex] = charArray[alphabetIndex];
            numIndex += 1;
        } 
        // Irrespective of alphabet or number
        alphabetIndex += 1;
    }
    return charArray.join('');
}

