var numIslands = function(grid) {
    let count = 0;
    function sink(row, col){
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0") {
            return;
        }
        grid[row][col] = "0";
        sink(row - 1, col)
        sink(row + 1, col)
        sink(row, col - 1)
        sink(row, col + 1)
    }
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === "1") {
                count++;
                sink(row, col);
            }
        }
    }
    return count;
};