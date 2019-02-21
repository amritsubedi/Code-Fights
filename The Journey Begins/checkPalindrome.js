/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
*/

bool checkPalindrome(string inputString) {
    
    int length = inputString.Length;
    for(int i = 0; i < length/2; i++){
        if(inputString[i] != inputString[length-1-i]){
            return false;
        }
    }
    
    return true;
    
}
