/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const res = new Array(rowIndex + 1).fill(1);
        for (let i = 1; i < rowIndex; ++i) {
            for (let j = i; j >= 1; --j) {
                res[j] += res[j - 1];
            }
        }
        return res;
};
/*
除了第一个和最后一个值都为1，其余数字都是上一行两个数字之和，也就可以理解为每个数字都是上一次循环加上它前面那个数字的和
只要使用双循环不停迭代，就能够得出n行的值，算是一种动态规划的解题方法

作者：yorn_yang
链接：https://leetcode-cn.com/problems/pascals-triangle-ii/solution/shuang-bai-dong-tai-gui-hua-jie-fa-by-yo-ibor/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/