/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/



function allLongestStrings(inputArray) {
    
    maxNum = 0;

    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > maxNum) {
            maxNum = inputArray[i].length;
        }
    }

    return inputArray.filter(word => word.length == maxNum);

}
