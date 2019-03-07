/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function palindromeRearranging(inputString) {
    
    var count = 0;
    var countOdd = 0;
    var isRearrangable = true;
    var strArray = inputString.split('');
    
    var myMap = new Map();
    
    for (var i = 0; i < strArray.length; i++) {
        
         var count = 1;
         if (myMap.has(strArray[i])) {
             count = myMap.get(strArray[i]) + 1;
         }
         myMap.set(strArray[i], count);
        
    }
 
    myMap.forEach(function(value, key) {
        
         // console.log(key + ' = ' + value);
         
         if (value % 2 != 0) {
             countOdd++;
         }

         if (countOdd >= 2) {
            isRearrangable = false;
         }
        
    });

    console.log('isRearrangable', isRearrangable);
    return isRearrangable;
}
