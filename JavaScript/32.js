/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s.length == 0) return 0
    var temp = [{type: 0, index: 0}]
    max = 0
    num = 0
    for(i=0;i<s.length;i++){
        if(s[i] == '(') temp.push({type: '(', index: i+1})
        //这里压入栈中的index是i+1，原因是在最开始我在栈头压入了一个辅助对象，该辅助对象的index是0。
        else if(s[i] == ')' && temp[temp.length-1].type == '(') temp.pop()
        else temp.push({type: ')', index: i+1})
    }
    temp.push({type: 0, index: s.length+1})
    for(j=0;j<temp.length-1;j++){
        num = temp[j+1].index - temp[j].index - 1
        //因为要计算两个相邻对象之间的括号数量，因此再-1
        if (num>max) max = num
    }
    return max
};

