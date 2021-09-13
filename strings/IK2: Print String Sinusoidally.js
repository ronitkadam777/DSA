/*
 *  Complete the function below.
    Input: A string s
    Output: Nothing. It's a void method
 */
 
function printStringSinusoidally(s) {
    let result = [
        new Array(s.length).fill(' '),
        new Array(s.length).fill(' '),
        new Array(s.length).fill(' ')
    ];
    let row = 2;
    let col = 0;
    let ascend = true;
    for(let i=0; i < s.length; i++) {
        s[i] === ' ' ? (result[row][i] = '~'): (result[row][i] = s[i]);
        if(row === 0) ascend = false;
        if(row === 2) ascend = true;
        ascend ? (row = row-1): (row = row+1);
    }
    //s = '  o   ~   k  \n o g e W r e \nG   l   o   d';
    result[0].join('');
    result[1].join('');
    result[2].join('');
    
    let answer = '';
    for(let subresult of result) {
        answer = answer + subresult.join('');
        answer = answer + '\n';
    }
    console.log(answer);
    return answer;
}

