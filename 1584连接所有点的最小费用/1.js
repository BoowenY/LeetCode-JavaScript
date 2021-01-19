//Prim算法
var minCostConnectPoints = function (points) {
  let arr = [];
  let min, index;
  arr.length = points.length;
  arr.fill(-1);
  let long = 0;
  let point = points[0];
  arr[0] = Infinity;
  for (let i = 1; i < points.length; i++) {
    arr[i] =
      Math.abs(points[0][0] - points[i][0]) +
      Math.abs(points[0][1] - points[i][1]);
  }

  for (let j = 0; j < points.length - 1; j++) {
    min = getMin(arr);
    long += min[0];
    index = min[1];
    for (let i = 0; i < points.length; i++) {
      if (
        Math.abs(points[index][0] - points[i][0]) +
          Math.abs(points[index][1] - points[i][1]) <
          arr[i] &&
        arr[i] != Infinity
      )
        arr[i] =
          Math.abs(points[index][0] - points[i][0]) +
          Math.abs(points[index][1] - points[i][1]);
    }
  }
  return long;
};

function getMin(arr) {
  let min = arr[0];
  let index = 0;
  let array = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  arr[index] = Infinity;
  array.push(min);
  array.push(index);
  return array;
}
