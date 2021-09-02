// Complete the KMP function below.
function KMP(t, p) {
    let lps = calculateLps(p);
    let pIndex = 0;
    let tIndex = 0;
    let result = [];
    while(pIndex < p.length && tIndex < t.length) {
        if(t[tIndex] === p[pIndex]) {
            tIndex = tIndex + 1;
            pIndex = pIndex + 1;
            if(pIndex === p.length) {
                result.push(tIndex - p.length);
                pIndex = lps[pIndex-1];
            }
        } else {
            if(pIndex === 0) {
                tIndex = tIndex + 1;
            } else {
                pIndex = lps[pIndex-1];    
            }
        }
    }
    if(!result.length) result.push(-1);
    return result;
}

function calculateLps(p) {
    let lps = [];
    let i = 0;
    let j = 1;
    let prefixMatch = 0;
    lps[i] = 0;
    while(j < p.length) {
        if(p[i] === p[j]) {
            prefixMatch = prefixMatch + 1;
            lps[j] = prefixMatch;
            j = j+1;
            i = i+1;
        } else {
            prefixMatch = 0;
            lps[j] = 0;
            j = j+1;
            i = 0;
        }
    }
    return lps;
}