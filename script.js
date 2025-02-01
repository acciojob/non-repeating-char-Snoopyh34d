function firstNonRepeatedChar(str) {
    if (!str) {
        return null;
    }

    const charCounts = {};
    for (const char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCounts[char] === 1) {
            return char;
        }
    }

    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));