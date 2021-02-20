let findShortestSubArray = (nums) => {
  let map = {};
  let times = 0; //当前最大次数
  let minLen = 0; //最短长度
  nums.map((item, i) => {
    if (!map[item]) {
      map[item] = [1, i, i]; //次数，起点，终点
    } else {
      map[item][0]++;
      map[item][2] = i;
      if (map[item][0] > times) {
        times = map[item][0];
        minLen = map[item][2] - map[item][1];
      } else if (map[item][0] == times) {
        minLen = Math.min(minLen, map[item][2] - map[item][1]);
      }
    }
  });
  return minLen + 1;
};
