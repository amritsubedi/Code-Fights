
/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/

function arrayMaximalAdjacentDifference(inputArray) {
    var max = inputArray[1] - inputArray[0];
    
    for (var i = 0; i < inputArray.length; i++) {
        
        if (inputArray[i+1] - inputArray[i] > max) {
            max = inputArray[i+1] - inputArray[i];
        }
        if(inputArray[i] - inputArray[i+1] > max) {
            max = inputArray[i] - inputArray[i+1];
        }
        
    }
    
    return max;
}
