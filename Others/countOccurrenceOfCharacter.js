/*
Count the occurence of characters in a string.
*/

function countNum(str) {
   strArr = str.split('');
   var myMap = new Map();
   for (var i = 0; i < strArr.length; i++) {
        var count = 1;
        if (myMap.has(strArr[i])) {
            count = myMap.get(strArr[i]) + 1;
        }
        myMap.set(strArr[i], count);
   }

   myMap.forEach(function(value, key) {
        console.log(key + ' = ' + value);
   });
}

countNum('abca');
