function toReadable (number) {
    numberStr = number.toString();
    console.log(numberStr.length);

    const numderArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'];

    const dozensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty']; // , 'hundred'
    
    let numberPartToReturn = '';

    // const dozenPartToReturn = dozensArr[((number / 10) ^ 0) - 2];

    let dozenPartToReturn = function (x) {
        if (x > 19) {
            return dozensArr[((x / 10) ^ 0) - 2];
        } else {
            return '';
        }        
    };

    // let numberPartToReturn = function (num) {
    //     if ((num % 10) !== 0) {
    //         numberPart = numderArr[num % 10]; 
    //     } else { return '';}
    // }

    // console.log(number - numberStr[0] * 100);

    
    if (number < 20) {      
        return `${numderArr[number]}`;

    }  else if (number < 100) {  

        if ((number % 10) !== 0) {
            numberPartToReturn = numderArr[number % 10]; 
        }
        return `${dozenPartToReturn(number)} ${numberPartToReturn}`;

        } else if (number < 1000) {
            const dozenFromHundred = number - (numberStr[0] * 100);
            // console.log('dozenFromHundred: ', dozenFromHundred);

            return `${numberPartToReturn} hundred ${dozenPartToReturn(dozenFromHundred)} ${numberPartToReturn}`;
            }


// for (let index = numberStr.length; index = 0; index--) {
//     const element = array[index];
    
}

console.log(toReadable(19), '- результат. Должно быть ninteen');
console.log(toReadable(75), '- результат. Должно быть seventy five');
console.log(toReadable(111), '- результат. Должно быть one hundred eleven');