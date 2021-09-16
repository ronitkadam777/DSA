/*
 * Complete the reverse_ordering_of_words function below.
 */
function reverse_ordering_of_words(s) {
    /*
     * Write your code here.
     */
    let s_arr = s.split('');
    let start = 0;
    let end = s.length-1;
    
    if(s_arr.indexOf(' ') === -1) return s;
    
    reverse(start, end, s_arr);  
    
    start = 0;
    let eow = 0;
    while(eow < s_arr.length) {
        if(s_arr[eow] === ' ') {
            start = eow + 1;
        }
        if(eow+1 < s_arr.length) {
            if(s_arr[eow] !== ' ' && s_arr[eow+1] === ' ') {
                reverse(start, eow, s_arr);
                start = eow + 1;
            }  
        }
        if(eow === s_arr.length-1) {
            reverse(start, eow, s_arr);
        }
        eow = eow + 1;
    }
    return s_arr.join('');
}

function reverse(start, end, s_arr) {
    while(start < end) {
        let temp = s_arr[end];
        s_arr[end] = s_arr[start];
        s_arr[start] = temp;
        start = start + 1;
        end = end - 1;
    }
}

