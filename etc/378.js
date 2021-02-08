var kthSmallest = function(matrix, k) {
	let row = matrix.length;
	let col = matrix[0].length;
	let left = matrix[0][0];
	let right = matrix[row - 1][col - 1];
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		// 在二位矩阵中计算小于mid的个数
		let count = findLessThanMid(matrix, mid, row, col);
		if (count < k) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return right;
};

findLessThanMid = (matrix, mid, row, col) => {
	let i = row - 1;
	let j = 0;
	let count = 0;
	while (i >= 0 && j < col) {
		if (matrix[i][j] <= mid) {
			count += i + 1;
			j++;
		} else {
			i--;
		}
	}
	return count;
};