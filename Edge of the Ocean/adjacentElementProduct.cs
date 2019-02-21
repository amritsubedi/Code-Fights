/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

int adjacentElementsProduct(int[] inputArray) {
        int max = -1000;
    
    for (int i = 0; i < inputArray.Length - 1; i++ ) {
        max = Math.Max(max, inputArray[i] * inputArray[i+1]);
    }
    
    return max;
}
