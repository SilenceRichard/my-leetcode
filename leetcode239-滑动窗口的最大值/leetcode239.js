/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let slider = [];
  let result = [];
  for (let i=0; i<nums.length; i++) {
    if (k === 1) {
      result.push(nums[i]); // 边界条件 k=1
    } else if (k === nums.length) {
        if (i === 0) {
          result.push(nums[i])
        } else {
          if (nums[i] > result[0]) {
            result[0] = nums[i];
          }
        }
    } else {
        if (i <= k - 1) { // 未检索至一个窗口的宽度
          if (
            slider[slider.length - 1] !== undefined
            && (nums[slider[slider.length - 1]] < nums[i])
          ) {
            while (
              nums[i] > nums[slider[slider.length - 1]]
            ) {
              slider.pop();
            }
            slider.push(i);
            if (i === k -1) { result.push(nums[slider[0]]); }
          } else {
            slider.push(i);
            if (i === k -1) { result.push(nums[slider[0]]); }
          }
        } else {
            const indexWidth =  i - slider[0] + 1;
            if (indexWidth > k) {
              slider.shift();    //如果队列头元素不在窗口，弹出
            }
            while (
              nums[i] > nums[slider[slider.length - 1]]
            ) {
              slider.pop();
            }
            slider.push(i);
            result.push(nums[slider[0]]);
        }
    }
  }
  return result;
};

console.log(maxSlidingWindow([1,3,1,2,0,5],3));