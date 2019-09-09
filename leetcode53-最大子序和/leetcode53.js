/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  function helper(nums,m,n) {
    if (m === n) {return nums[m];}
    const mid = ((n-m) >> 1) + m // 注： n-m>>x 表示➗2的x次方（向下取整）， >>0 （取整）
    let lmax = -Number.MAX_VALUE;
    let rmax = -Number.MAX_VALUE;
    let sum = 0;
    const l = helper(nums, m , mid);
    const r = helper(nums, mid+1, n);
    for (let i=mid; i>=m; i--) {
      sum = sum + nums[i];
      if (sum > lmax) {
        lmax = sum;
      }
    }
    sum = 0;
    for (let j=mid+1; j<=n; j++) {
      sum = sum + nums[j];
      if (sum > rmax) {
        rmax = sum;
      }
    }
    return Math.max(l, r, lmax + rmax);  
  }
  return helper(nums,0,nums.length-1);
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))