
/*
 * Complete the function below.
 */
function next_palindrome(n) {
    let originalNumber = n;
    let nextNumber = n+1;
    while(!isPallindrome(nextNumber)) {
        nextNumber = nextNumber + 1;
    }
    return nextNumber;
}

function isPallindrome(number) {
    let numberAsString = number.toString();
    return helper(numberAsString, 0, numberAsString.length - 1 );
}

function helper(number, startIndex, endIndex) {
    if((startIndex === endIndex) || (startIndex > endIndex)) {
        return true;
    }
    if(number[startIndex] !== number[endIndex]) {
        return false;
    }
    return helper(number, startIndex+1, endIndex-1);
}

