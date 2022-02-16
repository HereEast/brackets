// module.exports = function check(str, bracketsConfig) {
//   let openBrackets = [];
//   let bracketPairs = {};

//   for(let i = 0; i < bracketsConfig.length; i++) {
//     openBrackets.push(bracketsConfig[i][0]);

//       let key = bracketsConfig[i][1];
//       bracketPairs[key] = bracketsConfig[i][0];
//   }

//   console.log(openBrackets);
//   console.log(bracketPairs);

//   let stack = [];

//   for(let i = 0; i < str.length; i++) {
//       let currentSymbol = str[i];

//       if(openBrackets.includes(currentSymbol)) {
//           stack.push(currentSymbol);
//       } else {
//           if(stack.length == 0) {
//               return false;
//           }

//           let topElement = stack[stack.length - 1];

//           if(bracketPairs[currentSymbol] === topElement) {
//               stack.pop();
//           } else {
//               return false;
//           }
//       }
//   }

//   return stack.length === 0;
// }

module.exports = function check(str, bracketsConfig) {
   
    let brackets = bracketsConfig.join('').replace(/,/g, ''); // join: '(,)|,|'
    console.log(brackets);
    console.log(str);
    let stack = [];

    for (let bracket of str) {
        let bracketsIndex = brackets.indexOf(bracket);

        if (bracketsIndex % 2 === 0) { 
            if (bracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] === bracketsIndex) {
                stack.pop();
            } else if (bracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] !== bracketsIndex) {
                stack.push(bracketsIndex)
            } else {
                stack.push(bracketsIndex)
            }
        } else {
            if (stack.pop() !== bracketsIndex - 1) {
                  return false;
            }
        }
          
    }

    return stack.length === 0;
}