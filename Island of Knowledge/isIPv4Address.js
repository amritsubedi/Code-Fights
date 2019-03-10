/*
An IP address is a numerical label assigned to each device (e.g., computer, printer)
participating in a computer network that uses the Internet Protocol for communication. 
There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

*/

function isIPv4Address(inputString) {
    
    var arr = inputString.split('.');
    
    if (arr.length != 4) {
        return false;
    } 
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 255 || arr[i] < 0 || arr[i] == '' || parseInt(arr[i]) != arr[i] ) {
            return false;
        }
    }
    
    return true;
}
