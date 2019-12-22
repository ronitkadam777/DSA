function dutch_flag_sort(balls) {
    let bluePointer = 0;
    let redPointer = 0;
    let greenPointer = 0;
    while(bluePointer <= balls.length -1) {
        if(balls[bluePointer] === 'B') {
            bluePointer++;
        } else {
            swap(balls, bluePointer, greenPointer);
            bluePointer++;
            greenPointer++;
        }
    }
    //Decrease the greenPointer that gives you the end of the next iteration
    greenPointer = greenPointer - 1;
    const greenEnd = greenPointer;
	greenPointer = 0;
	while(greenPointer <= greenEnd) {
	    if(balls[greenPointer] === 'G') {
	        greenPointer++;
	    } else {
	        swap(balls, greenPointer, redPointer);
	        greenPointer++;
	        redPointer++;
	    }
	}
}

function swap(array, leftPointer, rightPointer) {
    let temp = array[leftPointer];
    array[leftPointer] = array[rightPointer];
    array[rightPointer] = temp;
}
