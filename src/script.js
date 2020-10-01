function toReadable (number) {
    numberStr = number.toString();
    console.log(numberStr.length);

    const numderArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'];

    const dozensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty', 'hundred'];
    
//     if (number < 20) {
//         return `${numderArr[number]}`;
//     }  

//     switch (numberStr) {
//         case 2:
//             console.log(numberStr);
//             dozen = dozensArr[((number / 10) ^ 0) - 2];
//             return `${dozen}`;
//             // break;

//         case 3: 
//             console.log(numberStr);
//             break;
    
//         default:
//             break;
//     }
    
//     console.log(numderArr);
// }

for (let index = numberStr.length; index = 0; index--) {
    const element = array[index];
    
}

console.log(toReadable(19));
console.log(toReadable(75));
console.log(toReadable(111));
