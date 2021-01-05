/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let head = 0;
    let ans = [];
    for(let i=1;i<=s.length;i++){
        if(s[i]!=s[i-1]){
            if(i-head >= 3){
                ans.push([head,i-1]);
            }                
            head = i;
        }
    }
    return ans;
};
