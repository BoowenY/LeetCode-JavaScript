/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g,'').toLowerCase();
    let n = s.length;
    for(let i = 0; i < n; i++){
        if(s[i] !== s[n - 1 - i])
            return false;
    }
    return true;
};
