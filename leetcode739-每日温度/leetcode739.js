/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let stack = [];
  let result = [];
  for (let i=0; i < T.length; i++) {
    result[i] = 0;
    if (i === 0) {
      stack.push({
        key: i,
        value: T[i],
      });
    } else {
      if (T[i] > stack[stack.length - 1].value) {
        while (
          stack[stack.length - 1]
          && T[i] > stack[stack.length - 1].value
        ) {
          const index = stack[stack.length - 1].key;
          result[index] = i - index;
          stack.pop();
        }
        stack.push({
          key: i,
          value: T[i],
        })
      } else {
        stack.push({
          key: i,
          value: T[i],
        });
      }
    }
  }
  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));