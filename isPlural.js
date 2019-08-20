
function isPlural(word) {
    let lastChar = word[word.length -1];
    if (lastChar === "s") {
        return true;
    } else {
        return false;
    }
}

console.log(isPlural("change"))