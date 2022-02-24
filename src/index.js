module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let opening = bracketsConfig.map(el => el[0]);
  let closing = bracketsConfig.map(el => el[1]);
  for (let symbol of str) {
      if (closing.includes(symbol) && closing[opening.findIndex(el => el === stack[stack.length - 1])] === symbol)
          stack.pop();
      else if (opening.includes(symbol))
          stack.push(symbol);
      else return false;
  }
  if (stack.length === 0)
      return true;
  return false;
}

console.log(module.exports("(||){|({})|}", [['(', ')'], ['{', '}'],['|','|']]));
