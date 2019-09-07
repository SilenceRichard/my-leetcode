/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const matchesMapper = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const sLength = s.length;
  for (let i=0; i<sLength; i++) {
    if (matchesMapper[s[i]]!==undefined) {
      stack.push(s[i]);
    } else {
      const leftPart = stack[stack.length-1];
      if (stack.length===0) {return false;}
      if (matchesMapper[leftPart]===s[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length===0) {return true;}
  else {return false;}
};

const s = '{[]}';

console.log(isValid(s));