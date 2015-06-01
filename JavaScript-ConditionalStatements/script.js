function problem1(a, b) {
    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
        console.log(a + ' ' + b);
    }
    else {
        console.log(a + ' ' + b);
    }
}

function problem2(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        console.log('0');
    }
    else if ((a < 0 ^ b < 0 ^ c < 0) || (a < 0 && b < 0 && c < 0)) {
        console.log('-');
    }
    else {
        console.log('+');
    }
}

function problem3(a, b, c) {
    if (a > b && a > c) {
        console.log(a + ' is the greatest!');
    }
    else
        if (b > c) {
            console.log(b + ' is the greatest!');
        }
        else
            console.log(c + ' is the greatest!');
}

function problem4(a, b, c) {
    if (a > b && a > c) {
        if (b > c) {
            console.log(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
        }
    }
    if (b > a && b > c) {
        if (a > c) {
            console.log(b + ' ' + a + ' ' + c);
        }
        else {
            console.log(b + ' ' + c + ' ' + a);
        }
    }
    if (c > a && c > b) {
        if (a > b) {
            console.log(c + ' ' + a + ' ' + b);
        }
        else {
            console.log(c + ' ' + b + ' ' + a);
        }
    }
}

function problem5(digit) {
    switch (digit) {
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('one');
            break;
        case 2:
            console.log('two');
            break;
        case 3:
            console.log('three');
            break;
        case 4:
            console.log('four');
            break;
        case 5:
            console.log('five');
            break;
        case 6:
            console.log('six');
            break;
        case 7:
            console.log('seven');
            break;
        case 8:
            console.log('eight');
            break;
        case 9:
            console.log('nine');
            break;
        default:
            console.log('not a digit');
            break;
    }
}

function problem6(a, b, c) {
    var x1 = 0,
        x2 = 0,
        d = 0;
    d = (Math.Pow(b, 2) - (4 * a * c));
    if (a == 0) {
        x1 = (-c) / b;
        console.log('The equation has one root: ' + x0);
    }
    else if (d < 0) {
        console.log('The equation has no real roots');
    }
    else if (d == 0) {
        x1 = (-b) / (2 * a);
        console.log("The eqation has one root: " + x1);
    }
    else {
        x1 = ((-b) + Math.sqrt(d)) / (2 * a);
        x2 = ((-b) - Math.sqrt(d)) / (2 * a);
        console.log('The roots of this equations are: ' + x1 + ' and ' + x2);
    }
}

function problem7(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
        console.log('The greatest is: ' + a);
    }
    else {
        if (b > c && b > d && b > e) {
            console.log('The greatest is: ' + b);
        }
        else {
            if (c > d && c > e) {
                console.log('The greatest is: ' + c);
            }
            else {
                if (d > e) {
                    console.log('The greatest is: ' + d);
                }
                else {
                    console.log('The greatest is: ' + e);
                }
            }
        }
    }
}

function problem8(number) {
    var ones = [' zero', ' one', ' two', ' three', ' four', ' five', ' six', ' seven',
                    ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen',
                    ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'],
            tens = [' ', ' ', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
            result = '';
    if (number < 20) {
        result = ones[number];  
    } else if ((number % 10) === 0 && number > 19 && number < 100) {
        result = tens[number / 10];
    } else if ((number % 10) !== 0 && number > 19 && number < 100) {
        result = tens[Math.floor(number / 10 % 10)] + ones[Math.floor(number / 1 % 10)];
    } else if ((number % 100) === 0 && number > 99 && number < 1000) {
        result = ones[number / 100] + ' hundred ';
    } else if ((number % 10) !== 0 && number > 100 && number < 1000) {
        result = ones[Math.floor(number / 100)] + ' hundred and' +
                tens[Math.floor(number / 10 % 10)] + ones[Math.floor(number / 1 % 10)];
    }
    console.log('\tThe number "' + number + '" is ' + result);
}