
function isMultiple(number) {
    let result = number % 200
    if (result == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isMultiple(20))