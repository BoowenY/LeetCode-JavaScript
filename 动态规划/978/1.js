最长子数组，动态规划经典题。一个>号，代表数组长度为2，连续的<>或者><就构成了湍流
读题完毕，根据题目设置两种数组状态，一种是UP，一种是DOWN，使用res记录最长子数组
如果当前数字小于前一个数组，那就是下降趋势，此时要记得把另一种状态置1，因为当前状态仅仅取决于前一个数字
遇到连续的相同数字，就要全部重置，都设置为1

代码

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    const n = arr.length;
    let up = 1, down = 1, res = 1;
    for(let i = 1; i < n; i++) {
        if(arr[i] < arr[i - 1]) {
            down = up + 1;
            up = 1;
        }
        else if(arr[i] > arr[i - 1]) {
            up = down + 1;
            down = 1;
        }
        else {
            up = 1;
            down = 1;
        }
        res = Math.max(res, Math.max(up, down));
    }
    return res;
};

作者：an_ger
链接：https://leetcode-cn.com/problems/longest-turbulent-subarray/solution/zhe-jiu-shi-dong-tai-gui-hua-ma-by-an_ge-9azy/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。