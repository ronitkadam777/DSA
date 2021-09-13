/*
* Complete the 'find_words' function below.
*
* The function accepts STRING and STRING ARRAY as parameter.
* Return 2D INTEGER ARRAY.
*/
function find_words(text, words) {
	// Write your code here
	// Parse Text

	const result = [];
	const map = {};
	const list = text.split(' ');
	let counter = 0;
	for(let word of list) {
	    if(map[word]) {
	        map[word].push(counter);
	    } else {
	        map[word] = [counter];
	    }
	    counter+=word.length+1;
	}
    
    // Check words
    for(let i=0; i < words.length; i++) {
        result.push(map[words[i]] || [-1]);
    }

    return result;
}

