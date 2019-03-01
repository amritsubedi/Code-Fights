/* 
You are given an array of integers. 
On each move you are allowed to increase exactly one of its element by one. 
Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be

arrayChange(inputArray) = 3.
*/

function arrayChange(inputArray) {
    
    var initialSum = inputArray.reduce((a,b) => a+b);
    
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= inputArray[i+1]) {
            inputArray[i+1] += inputArray[i] - inputArray[i+1] + 1;
        }
    }
    
    var finalSum = inputArray.reduce((a,b) => a+b);
    
    return(finalSum - initialSum);

}
