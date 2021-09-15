/*
 * Complete the solver function below.
 *
 * The function accepts STRING_ARRAY dictionary as parameter.
 * and string array mat as input matrix.
 * The function returns the list of all possible words from dictionary
 * found in the matrix mat
 */
let visited;
let matrix;
let root;
let result;
let _dictionary;

class TrieNode {
    constructor() {
        this.children = new Map();
    }
}


function boggle_solver(dictionary, mat) {
    // Write your code here
    result = new Set();
    root = new TrieNode();
    _dictionary = dictionary;
    buildTrie(dictionary);
    visited = new Array(mat.length).fill(0).map(() => new Array(mat[0].length).fill(-1));
    matrix = mat;
    helper();
    return [...result];
}

function helper(dictionary) {
    for(let row=0; row < matrix.length; row++) {
        for(let col=0; col < matrix[0].length; col++) {
            if(root.children.has(matrix[row][col])) {
                visited[row][col] = 1;
                explore(row, col, [matrix[row][col]], root.children.get(matrix[row][col]));
                visited[row][col] = -1;
            }
        }
    }
}

function explore(row, col, slate, trieNode) {
    if(trieNode.children.has('$')) {
        result.add(slate.join(''));
        if(result.size === _dictionary.length) return;
    }
    getNeighbours(row, col).forEach(neighbour => {
       let key = matrix[neighbour[0]][neighbour[1]];
       if(trieNode.children.has(key)) {
           if(visited[neighbour[0]][neighbour[1]] === -1) {
                visited[neighbour[0]][neighbour[1]] = 1;
                slate.push(key);
                explore(neighbour[0], neighbour[1], slate, trieNode.children.get(key));
                visited[neighbour[0]][neighbour[1]] = -1;
                slate.pop();
           }
       }
    });
}

function getNeighbours(row, col) {
    let neighbours = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
    let validNeighbours = [];
    for(let i=0; i < neighbours.length; i++) {
        if(row+neighbours[i][0] >= 0 && row+neighbours[i][0] < matrix.length) {
            if(col+neighbours[i][1] >= 0 && col+neighbours[i][1] < matrix[0].length) {
                validNeighbours.push([row+neighbours[i][0], col+neighbours[i][1]]);    
            }
        }
    }
    return validNeighbours;
}

function buildTrie(dictionary) {
    for(let i=0; i < dictionary.length; i++) {
        insertTrie(dictionary[i]);
    }
}

function insertTrie(word) {
    let trieNode = root;
    for(let i=0; i < word.length; i++) {
        if(!trieNode.children.has(word[i])) {
            trieNode.children.set(word[i], new TrieNode());
        }
        trieNode = trieNode.children.get(word[i]);
    }
    trieNode.children.set('$', new TrieNode());
}