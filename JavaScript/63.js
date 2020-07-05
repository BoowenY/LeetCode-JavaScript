/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(nums) {
    let m=nums.length,n=nums[0].length;
    if(nums[0][0]===1 || nums[m-1][n-1]===1 || !nums.length) return 0;
    for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
          if(nums[i][j]===1){
              nums[i][j]=0;
          }else if(i===0 && j===0){
                  nums[i][j]=1;  
          }else {
                let up=0;
                let left=0;
                if(i>0) up=nums[i-1][j];
                if(j>0) left=nums[i][j-1];
                nums[i][j]=up+left;
              }
          }
      }
    return nums[m-1][n-1];
  };
  