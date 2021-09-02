// Complete the getLongestSubstringLengthExactly2DistinctChars function below.
// TRIES
class Trie {
    constructor(isWord) {
        this.children = new Map();
    }
}

let root;
let globalResult;
function getLongestSubstringLengthExactly2DistinctChars(s) {
    globalResult = 0;
    root = new Trie(false);
    helper(s);
    return globalResult;
}

function helper(s) {
    let substrings = generateSubstrings(s);
    
    for(let i=0; i<substrings.length; i++) {
        buildTrie(substrings[i]);
    }
}

function buildTrie(substring) {
    let trieNode = root;
    let charset = new Set();
    let temp = '';
    let localResult = 0;
    for(let i=0; i < substring.length; i++) {
        let char = substring[i];
        charset.add(char);
        if(charset.size > 2) break;
        temp += char;
        if(!trieNode.children.has(char)) {
            trieNode.children.set(char, new Trie(false));
        }
        trieNode = trieNode.children.get(char);
    }
    if(charset.size === 2 || charset.size === 3) localResult = temp.length;
    globalResult = Math.max(globalResult, localResult);
}


function generateSubstrings(s) {
    let substrings = [];
    for(let index=1; index <= s.length; index++) {
       substrings.push(s.slice(-index));
    }
    return substrings;
}


// Complete the getLongestSubstringLengthExactly2DistinctChars function below.
// Complete the getLongestSubstringLengthExactly2DistinctChars function below.
/*
 Sliding Window Technique:
 - Fix leftIndex at 1st element and rightIndex at 2nd element
 - Keep expanding window on the RHS until you get 3 or more distinct chars (stored using map) 
 - If more than 3 distinct chars, start reducing window by incrementing leftIndex 
   and for every element skipped from left, reduce it's presence from the Map.
 - While expanding window, for every valid case update globalResult to windowlength 
*/
function getLongestSubstringLengthExactly2DistinctChars(s) {
    let leftIndex = 0;
    let rightIndex = 1;
    let result = 0;
    let map = new Map();
    map.set(s[leftIndex], 1);
    if(s[leftIndex] === s[rightIndex]) {
        map.set(s[leftIndex], 2);
    } else {
        map.set(s[rightIndex], 1);
    }
    
    while(rightIndex < s.length) {
        // Expanding window 
        while(map.size <= 2 && rightIndex < s.length) {
            if(map.size === 2) {
                result = Math.max(result, rightIndex-leftIndex+1);    
            }
            rightIndex = rightIndex + 1;
            if(rightIndex < s.length) {
                if(map.has(s[rightIndex])) {
                    map.set(s[rightIndex], map.get(s[rightIndex])+1);
                } else {
                    map.set(s[rightIndex], 1);
                }
            }
        }
        
        // Reducing Window
        while(map.size > 2) {
            map.set(s[leftIndex], map.get(s[leftIndex])-1);
            if(map.get(s[leftIndex]) === 0) {
                map.delete(s[leftIndex]);
            }
            leftIndex = leftIndex + 1;
        }
    }
    return result;
}