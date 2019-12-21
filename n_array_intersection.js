// Intersection of 3 Arrays

let arraySet = [[[1],[2],[3]], [[10],[2],[3],[4]], [[0],[1],[2],[3]], [[3]]];
let intersection = [];
let map = {};

for(let i=0; i < arraySet.length; i++) {
    for(let j=0; j < arraySet[i].length; j++) {
       // Check if map contains, if yes, increment value, else add to map
        if(map.hasOwnProperty(arraySet[i][j])){
            let value = arraySet[i][j];
            let valueCount = map[arraySet[i][j]] + 1;
            map[arraySet[i][j]] = valueCount;
            if(i === arraySet.length-1 && map[value] === arraySet.length) {
                intersection.push(value);
            }
        } else {
            map[arraySet[i][j]] = 1;
        }
    }
}
print(JSON.stringify(map));
print(intersection);