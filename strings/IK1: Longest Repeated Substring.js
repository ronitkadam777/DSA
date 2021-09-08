/*
 * Complete the 'getLongestRepeatedSubstring' function below.
 */
 
class Trie {
    constructor() {
        this.children = new Map();
    }
}

let root, result;
function getLongestRepeatedSubstring(inputStr) {
    // Write your code here
    result = '';
    root = new Trie();
    helper(inputStr);
    return result;
}

function helper(word) {
    for(let i = word.length-1; i >= 0; i--) {
        buildTrie(word.slice(i, word.length));
    }
    exploreTrie(root, []);
}

function buildTrie(substring) {
    let trieNode = root;
    for(let i=0; i<substring.length; i++) {
        if(!trieNode.children.has(substring[i])) {
            trieNode.children.set(substring[i], new Trie());
        }
        trieNode = trieNode.children.get(substring[i]);
    }
    trieNode.children.set('$', new Trie());
}

function exploreTrie(trieNode, slate) {
    for(let [key, value] of trieNode.children) {
        slate.push(key);
        if(value.children.size > 1) {
            if(slate.join('').length > result.length) {
                result = slate.join('');
            }
        }
        exploreTrie(value, slate);
        slate.pop();
    }
}
