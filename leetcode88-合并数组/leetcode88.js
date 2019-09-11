/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let current = m + n -1;
  while (current >= 0) {
    if (n === 0) { return; }
    if (m < 1) {
      nums1[current --] = nums2[-- n];  // -- 在后，先赋值，后减 ， --在前，先减后赋值
      continue;
    }
    if (n < 1) {
      nums1[current --] = nums1[-- m];
    }
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[current --] = nums1[-- m];
    } else {
      nums1[current --] = nums2[-- n];
    }
  }
};