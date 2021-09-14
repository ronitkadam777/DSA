/*
 * Complete the 'minimum_window' function below.
 *
 * The function accepts STRING s and STRING t as parameter.
 */

function minimum_window(s, t) {
    // Write your code here
    let leftIndex = 0;
    let rightIndex = 0;
    let result = s;
    let updated = false;
    let wordMap = new Map();
    let stringMap = new Map();
    let masterSet = new Set();
    for(let char of t) {
        masterSet.add(char);
        if(wordMap.has(char)) {
            wordMap.set(char, wordMap.get(char)+1);
        } else {
            wordMap.set(char, 1);
        }
    }
    
    //console.log(wordMap);
    
    while((rightIndex <= s.length) && (leftIndex <= s.length)) {
        //console.log(leftIndex, rightIndex);
        // Has got all
        if(checkMaps(wordMap, stringMap, masterSet)) {
            let tempResult = s.slice(leftIndex, rightIndex);
            //console.log(tempResult);
            if(tempResult.length < result.length) {
                result = tempResult;
                updated = true;
            }
            if((tempResult.length === result.length) && !updated) {
                result = tempResult;
                updated = true;
            }
            if(masterSet.has(s[leftIndex])) {
                stringMap.set(s[leftIndex], stringMap.get(s[leftIndex])-1);
                if(stringMap.get(s[leftIndex]) === 0) {
                    stringMap.delete(s[leftIndex]);
                }
            }
            leftIndex = leftIndex + 1;
        } else {
            if(masterSet.has(s[rightIndex])) {
                if(stringMap.has(s[rightIndex])) {
                    stringMap.set(s[rightIndex], stringMap.get(s[rightIndex])+1);
                } else {
                    stringMap.set(s[rightIndex], 1);
                }
            }
            rightIndex = rightIndex + 1;
        }
    }
    if(!updated && result !== t) {
        result = -1;
    }
    return result;
}

function checkMaps(wordMap, stringMap, masterSet) {
    //console.log(stringMap);
    if(wordMap.size === stringMap.size) {
        for(let item of masterSet) {
            //console.log(wordMap.get(item), stringMap.get(item));
            if(wordMap.get(item) > stringMap.get(item)) return false;
        }
        return true;
    } else {
        return false;
    }
}

