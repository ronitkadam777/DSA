/*
 * Complete the 'pattern_matcher' function below.
 *
* The function accepts STRING text and pattern as parameter and returns BOOLEAN.
 */
let bool;
function pattern_matcher(text, pattern) {
    bool = false;
	// Write your code here
	return pattern_matcher_recur(text, pattern, 0, 0, new Map());
}

function pattern_matcher_recur(text, pattern, i, j, cache) {
    if(i === text.length) {
        return ignorePattern(pattern, j);
    }
    const key = `${i}-${j}`;
    if(cache.has(key)) {
        return cache.get(key);
    }
    // if next is going to be * then handle current pattern separately
    if(pattern[j+1] === '*') {
       // choose to ignore current char
       const ignore = pattern_matcher_recur(text, pattern, i, j + 2, cache);
       // choose to use the current char
       const match = pattern[j] === '.' || text[i] === pattern[j];
       const choose = match && pattern_matcher_recur(text, pattern, i + 1, j, cache);
       cache.set(key, ignore || choose);
       return ignore || choose;
    }
    // if match 
    if(text[i] === pattern[j] || pattern[j] === '.') {
        const result = pattern_matcher_recur(text, pattern, i + 1, j + 1, cache);
        cache.set(key, result);
        return result;
    }
    cache.set(key, false);
    return false;
}

const ignorePattern = (pattern, i) => {
    if (i === pattern.length) {
        return true;
    }
    if(pattern[i+1] === '*') {
        return ignorePattern(pattern, i+2)
    }
    return false; // .*b
}
