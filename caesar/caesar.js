const caesar = function(str , s) {
    let solution = "";
    if (s>=0) {
        n = s;
    } else {
       n = s + 26; 
    }
    
    for (let i = 0; i < str.length; i++) {
        let asci = str[i].charCodeAt();
    
        if (asci >= 65 && asci <= 90) {
            solution += String.fromCharCode(((asci-65 + n) % 26)+65);
        
        } else { if (asci >= 97 && asci <= 122) {
            solution += String.fromCharCode(((asci-97 + n) % 26)+97);
        
        } else {
            solution += str[i];
        }}
        
    }
    return solution;
    }
    //// 97-122
    module.exports = caesar
    
    