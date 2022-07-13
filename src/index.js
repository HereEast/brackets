module.exports = function check(str, bracketsConfig) {

    let config = bracketsConfig.join('').replace(/,/g, ''); // String: ()[]{}
    let stack = [];

    for (let bracket of str) {
        let index = config.indexOf(bracket); // Str: []][[] >>> Config: ()[]{} >>> Br: []] >>> Index: 2 3 3

        // OPENING
        if (index % 2 === 0) { 
            let last = stack.length - 1;

            if (bracket === config[index + 1] && stack[last] === index) { // If opening = closing (Ex: ||)
                stack.pop();
            } else {
                stack.push(index); 
            }
        // CLOSING
        } else { 
            let lastInStack = stack.pop();
            if (lastInStack !== index - 1) {
                return false;
            }
        }    
    }
    return stack.length === 0;
}

// module.exports = function check(str, bracketsConfig) {
//     let stack = [];
//     let brackets = {};

//     for(let i = 0; i < bracketsConfig.length; i++) {
//         let key = bracketsConfig[i][1];
//         let value = bracketsConfig[i][0];
//         brackets[key] = value;
//     }

//     let closingBrackets = [];
//     for(let key in brackets) {
//         closingBrackets.push(key);
//     }

//     console.log(brackets);
//     console.log(str);

//     function isClosingBracket(br) {
//         return closingBrackets.includes(br);
//     }

//     for(let i = 0; i < str.length; i++) {
//         let current = str[i];

//         if(!isClosingBracket(current)) { 
//             stack.push(current); 
//         } else { 
//             if(brackets[current] === stack[stack.length - 1]) stack.pop();
//             else return false;
//         }
//     }

//     return stack.length === 0;
// }