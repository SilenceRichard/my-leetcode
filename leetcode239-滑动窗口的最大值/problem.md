# 问题

给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3

输出: [3,3,5,5,6,7]

解释:

  滑动窗口的位置                最大值

---------------               -----

**[1  3  -1]** -3  5  3  6  7       **3**

 1 **[3  -1  -3]** 5  3  6  7       **3**

 1  3 **[-1  -3  5]** 3  6  7       **5**

 1  3  -1 **[-3  5  3]** 6  7       **5**

 1  3  -1  -3 **[5  3  6] 7**       **6**

 1  3  -1  -3  5 **[3  6  7]**      **7**

 # 思路

 巧妙利用双端队列 O(n) 保存元素**下标**

遍历数组 0 - length -1

[1]

[3] (3 > 1)

[3, -1] (-1 < 3) 已为一个窗口 -> 输出3

[3, -1 ,-3] -> 输出3

[3, -1, 5] (5 > -3)

[3, 5] 因为保存的是元素下标，所以元素3被淘汰

[5] -> 输出5
