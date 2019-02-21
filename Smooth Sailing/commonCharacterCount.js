/*

Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

*/


function commonCharacterCount(s1, s2) {
    
    str1 = s1.split('');
    str2 = s2.split('');
    count = 0;
    
    for (i = 0; i < s1.length; i++) {
        if (str2.includes(str1[i]) == true) {
                count++;
                str2.splice((str2.indexOf(str1[i])), 1);
        }
    }
    
    return count;

}
