function toReadable (number) {
    const numberArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const dozensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let numberStr = number.toString();
    let numberPartToReturn = '';
    let dozensToReturn = '';

    let getStrFromDozensArr = function (num) {
        if (num > 19) {
            return dozensArr[((num / 10) ^ 0) - 2];
        } else {
            return '';
        }        
    };

    let getLastNumber = function (num) {
        if ((num % 10) !== 0) {
            return numberPartToReturn = ` ${numberArr[num % 10]}`; 
        }
    }

    let getDozens = function (num) {
        dozensToReturn = ` ${dozensArr[((num / 10) ^ 0) - 2]}`;
        return dozensToReturn;
    }
   
    if (number < 20) {      
        return `${numberArr[number]}`;

    }  else if (number < 100) {  
        getLastNumber(number);
        return `${getStrFromDozensArr(number)}${numberPartToReturn}`;

        } else if (number < 1000) {  
            let hundredToReturn = numberArr[(number / 100) ^ 0];
            let dozenFromHundred = number - (numberStr[0] * 100);
            
            if (dozenFromHundred === 0) {              
            } else if (dozenFromHundred < 20) {
                    dozensToReturn = ` ${numberArr[dozenFromHundred]}`;
                } else {
                    getLastNumber(dozenFromHundred);
                    getDozens(dozenFromHundred);
                    }  
                return `${hundredToReturn} hundred${dozensToReturn}${numberPartToReturn}`;
               
            
        }
}

console.log('результат = ', toReadable(999), '\nДолжно быть = seven hundred nine');
// console.log('результат = ', toReadable(660), '\nДолжно быть = six hundred sixty');
// console.log('результат = ', toReadable(800), '\nДолжно быть = eight hundred');
