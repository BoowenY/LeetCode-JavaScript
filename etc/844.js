var backspaceCompare = function(S, T) {
    let i = S.length - 1, j = T.length - 1;
    let backspace = 0, backspact = 0;
    while( i >= 0 || j >= 0) {
        while(i >= 0){
            if(S[i] === "#"){
                backspace++;
                i--;
            }
            else if(backspace > 0) {
                backspace--;
                i--;
            }
            else{
                break;
            }
        }
        while(j >= 0){
            if(T[j] === "#"){
                backspact++;
                j--;
            }
            else if(backspact > 0) {
                backspact--;
                j--;
            }
            else{
                break;
            }
        }
    if(S[i] !== T[j]){
        return false;
    }
    i--;
    j--;
    } 
    return true;
};