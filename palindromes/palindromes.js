const palindromes = function(string) {
    processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    //// [^a-zA-Z] means any character that IS NOT a-z OR A-Z (is not a letter)
    ///// "/g" means search globally
    ///// (,""), all non-letter characters are replaced with nothing
    ////// the aim is to ignore punctuation and spaces
    return (
      processedString
        .split("")
        .reverse()
        .join("") == processedString
    );
}

module.exports = palindromes

/// copied form solutions branch
