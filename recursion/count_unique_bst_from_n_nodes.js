
/*
 * Complete the function below.
   
   For n nodes, we have 1 root and n-1 children
   These n-1 children can be divided into,
   left right
    0    n-1    // and for each left or child node, we try to find the unique BSTs that can be formed
    1    n-2    // with the corresponding number of nodes available to it.
    2    n-3    // we then take the product of left and right combinations and add these products for
    ...         // for different splits
    n-1   0
 */
function how_many_BSTs(n) {
    let totalBSTs = 0;
    let childrenNodes = n-1;
    if(n === 0) {
        return 1;
    }
    for(let leftNodes=0; leftNodes < n; leftNodes++) {
        let rightNodes = n-1-leftNodes;
        totalBSTs += how_many_BSTs(leftNodes)*how_many_BSTs(rightNodes);
    }
    return totalBSTs;
}

