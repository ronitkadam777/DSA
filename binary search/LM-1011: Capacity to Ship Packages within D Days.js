/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
    let minCargoCapacity = 0;
    let maxCargoCapacity = 0;
    weights.forEach(cargo => {
        maxCargoCapacity += cargo;
        if(cargo > minCargoCapacity) minCargoCapacity = cargo;
    });
    
    while(minCargoCapacity <=  maxCargoCapacity) {
        let potentialCargoCapacity = Math.floor(minCargoCapacity + (maxCargoCapacity - minCargoCapacity)/2);
        if(calculateNumberOfDays(weights, potentialCargoCapacity) > days) {
            minCargoCapacity = potentialCargoCapacity + 1;
        } else {
            maxCargoCapacity = potentialCargoCapacity - 1;
        }
    }
    return minCargoCapacity;
};

function calculateNumberOfDays(weights, capacity) {
    let days = 0;
    let dailyWeight = 0;
    weights.forEach(weight => {
        dailyWeight = dailyWeight + weight;
        if(dailyWeight === capacity) {
            days = days + 1;
            dailyWeight = 0;
        } else if(dailyWeight > capacity) {
            dailyWeight = weight;
            days = days + 1;
        }
    });
    //Spare cargo
    if(dailyWeight > 0) days = days + 1;
    return days;
}