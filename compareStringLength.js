
function checkLength(string1, string2) {
    let str1Length = string1.length;
    let str2Length = string2.length;
 
    if (str1Length == str2Length) {
        return true;
    } else {
        return false;
    }
 }
 
 console.log(checkLength("string12", "string23"));