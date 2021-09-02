/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    return helper(piles, h);
};

function helper(piles, h) {
    let start = 1;
    let end = Math.max(...piles);
    
    while(start <= end) {
        let mid = start + Math.floor((end - start)/2);
        let hours = calculateTimeToEat(mid, piles);
        if(hours > h) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return start;
}

function calculateTimeToEat(speed, piles) {
    let hours = 0;
    piles.forEach(pile => {
        hours = hours + Math.floor(pile/speed);
        if(pile%speed > 0) {
            hours = hours + 1;
        }
    });
    return hours;
}