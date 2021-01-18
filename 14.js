
var longestCommonPrefix = function(strs) {
    strs.sort()//按编码排序
    if (strs.length === 0) return ''//空数组返回''
    var first = strs[0],
        end = strs[strs.length - 1]
    if(first === end || end.match(eval('/^' + first + '/'))){
        return first//first包含于end返回first
    }
    for(var i=0;i<first.length;i++){
        if(first[i] !== end[i]){
            return first.substring(0,i)//匹配失败时返回相应字符串
        }
    }
};