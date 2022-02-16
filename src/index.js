module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketPairs = {};

  for(let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);

      let key = bracketsConfig[i][1];
      bracketPairs[key] = bracketsConfig[i][0];
  }

  let stack = [];

  for(let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];

      if(openBrackets.includes(currentSymbol)) {
          stack.push(currentSymbol);
      } else {
          if(stack.length == 0) {
              return false;
          }

          let topElement = stack[stack.length - 1];

          if(bracketPairs[currentSymbol] === topElement) {
              stack.pop();
          } else {
              return false;
          }
      }
  }

  console.log(openBrackets);
  return stack.length === 0;
}