/*

Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the 
sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.

*/



function isLucky(n) {
    
    var array = n.toString().split('');
    var sumFirstHalf = 0;
    var sumSecondHalf = 0;
    var isLucky = false;
    
    for (var i = 0; i < array.length / 2; i++) {
        sumFirstHalf += parseInt(array[i]);
        console.log(sumFirstHalf);
    }
    
    for (var i = array.length / 2; i < array.length; i++) {
        sumSecondHalf += parseInt(array[i]);
        console.log(sumSecondHalf);

    }
    
    return sumFirstHalf == sumSecondHalf ? true : false;
}
