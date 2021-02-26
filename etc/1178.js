var findNumOfValidWords = function (words, puzzles) {
    const map = {}; // 存放所有单词对应的二进制数
    for (const word of words) { // 遍历单词表
        const bits = getBits(word); // 单词对应的二进制数
        if (map[bits] === undefined) { // 存入map，统计出现次数
            map[bits] = 1;
        } else {
            map[bits]++;
        }
    }
    const res = new Array(puzzles.length).fill(0); // 待返回的数组，所有puzzle的谜底数量
    for (let i = 0; i < puzzles.length; i++) { // 遍历puzzles
        const puzzleBit = getBits(puzzles[i]); // 当前puzzle的二进制数
        const first = getBits(puzzles[i][0]); // 谜语的首字符对应的二进制数，比如c就是100

        let n = puzzleBit; // n初始为puzzleBit这个二进制数
        while (n > 0) { // 遍历puzzle的所有字母组合，当n=0时终止遍历
            // 按位都是1才为1，否则为0，结果非0，表示n这个组合包含puzzle的首字母
            // 而且n这个组合在map中有值，即有单词长n这样，值累加给res[i]
            if ((n & first) != 0 && map[n] > 0) {
                res[i] += map[n];
            }
            // n-1 AND puzzleBit，生成一个puzzleBit的新的子集合
            n = (n - 1) & puzzleBit;
        }
    }
    return res;
};
// word转成用二进制数表示的字符集合
function getBits(word) {
    let res = 0;
    for (const c of word) {
        const offset = c.charCodeAt(0) - 97; // a对应二进制数的最低位，求出当前字母的偏移位
        const status = 1 << offset; // 将二进制的1左移offset位，右边用0填充
        res = res | status; // 按位或，该位其中有一个为1，就为1（出现过），否则为0
    }
    return res;
}

