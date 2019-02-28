/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example:

For
picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/

function addBorder(picture) {
    
    var lengthOfBorder = picture[0].length + 2;
    var addElement = "";
    
    for (var i = 0; i < picture.length; i++) {
        picture[i] = "*" + picture[i] + "*";
    }
    
    for (var i = 0; i < lengthOfBorder; i++) {
        addElement += "*";
    }
    
    picture.splice(0, 0, addElement);
    picture.splice(picture.length, 0, addElement);
    
    return picture;

}
