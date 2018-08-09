export const romanNumbersCoverter = (value) => {
    let result = "";
    while (value > 0) {
        if ( value >= 1000 ) {
            var number = isThousands(value);
            result += romansNumbers(number);
            value -= number;
        } else if ( value >= 100) {
            var number = isHundred(value);
            result += romansNumbers(number);
            value -= number;
        } else if (value >= 10 ) {
            var number = isTens(value);
            result += romansNumbers(number);
            value -= number;
        } else {
            var number = value;
            if (value !== 4 && value !== 5 && value !== 9)number = 1;
            if(value > 5  && value !==9) number=5;
            result = result + romansNumbers(number);
            value -= number;
        }
    }
    return result;
}

function isThousands(number) {
    var truncNumber = Math.trunc(number / 1000)
    var numberPassesTrunc = truncNumber;
    if (truncNumber !== 4 &&  truncNumber !== 5 && truncNumber !== 9) truncNumber = 1;
    if(numberPassesTrunc > 5  && numberPassesTrunc !==9) truncNumber=5;
    return truncNumber * 1000;
}
function isHundred(number) {
    var truncNumber = Math.trunc(number / 100)
    var numberPassesTrunc = truncNumber;
    if (truncNumber !== 4 && truncNumber !== 5 && truncNumber !== 9) truncNumber = 1;
    if(numberPassesTrunc > 5  && numberPassesTrunc !==9) truncNumber=5;
    return truncNumber * 100;
}
function isTens(number) {
    var truncNumber = Math.trunc(number / 10)
    var numberPassesTrunc = truncNumber;
    if (truncNumber !== 4 && truncNumber !== 5 && truncNumber !== 9) truncNumber = 1;
    if(numberPassesTrunc > 5  && numberPassesTrunc !==9) truncNumber=5;
    return truncNumber * 10;
}

const romansNumbers = (number) => {
    switch (number) {
        case 1000:
            return "M";
        case 900:
            return "CM";
        case 500:
            return "D";
        case 400:
            return "CD";
        case 100:
            return "C";
        case 90:
            return "XC";
        case 50:
            return "L";
        case 40:
            return "XL";
        case 10:
            return "X";
        case 9:
            return "IX";
        case 5:
            return "V";
        case 4:
            return "IV";
        case 1:
            return "I";

        default:
            break;
    }
}