// Arithmetic
function performArithmetic() {
    const arithmeticOne = Number(document.ArithmeticForm.arithmeticOne.value);
    const arithmeticTwo = Number(document.ArithmeticForm.arithmeticTwo.value);
    const arithmeticOperator = document.ArithmeticForm.arithmeticOperator.value;
    let arithmeticResult = 0;

    switch(arithmeticOperator) {
        case 'Addition':
            arithmeticResult = arithmeticOne + arithmeticTwo;
            alert(`The result of adding ${arithmeticOne} and ${arithmeticTwo} is ${arithmeticResult}.`);
            break;
        case 'Subtraction':
            arithmeticResult = arithmeticOne - arithmeticTwo;
            alert(`The result of subtracting ${arithmeticOne} from ${arithmeticTwo} is ${arithmeticResult}.`);
            break;
        case 'Multiplication':
            arithmeticResult = arithmeticOne * arithmeticTwo;
            alert(`The result of multiplying ${arithmeticOne} and ${arithmeticTwo} is ${arithmeticResult}.`);
            break;
        case 'Division':
            if (arithmeticTwo == 0) {
                alert(`Can't divide by 0.`);
                break;
            }
            else {
                arithmeticResult = arithmeticOne / arithmeticTwo;
                alert(`The result of dividing ${arithmeticOne} by ${arithmeticTwo} is ${arithmeticResult}.`);
                break;
    }
    }
    document.getElementById("arithmeticResult").innerHTML += arithmeticResult;
}

// Factorial
function performFactorial() {
    const factorialOne = Number(document.FactorialForm.factorialOne.value);
    let factorialResult = 0;
    if (factorialOne < 0) {
        alert(`Can't calculate the factorial of a negative number.`);
        return;
    } else if (factorialOne === 0) {
        alert (`The factorial of ${factorialOne} is 1.`);
        return;
    } else {
        factorialResult = 1;
        for (i = 1; i <= factorialOne ; i++) {
            factorialResult *= i;
        }
    }
    alert (`The factorial of ${factorialOne} is ${factorialResult}.`);

    document.getElementById("factorialResult").innerHTML += factorialResult;
}

// Fibonacci
function performFibonacci() {
    const fibonacciOne = Number(document.FibonacciForm.fibonacciOne.value);
    let prev = 0;
    let curr = 1;

    if (fibonacciOne < 0) {
        alert(`Can't calculate the nth Fibonacci number of a negative number.`);
        return;
    } else if (fibonacciOne === 0) {
        alert (`The nth Fibonacci number for ${fibonacciOne} is 0.`);
        return;
    } else {
        for (i = 2; i <= fibonacciOne; i++) {
            next = prev + curr;
            prev = curr;
            curr = next;
            fibonacciResult = curr;
   }
    }
    alert(`The nth Fibonacci number for ${fibonacciOne} is ${fibonacciResult}.`);

    document.getElementById("fibonacciResult").innerHTML += fibonacciResult;
}

// Range
function performRange() {
    const rangeOne = Number(document.RangeForm.rangeOne.value);
    const rangeTwo = Number(document.RangeForm.rangeTwo.value);
    const rangeThree = document.RangeForm.rangeThree.value;
    let rangeResult = 0;

    let max = Math.max(rangeOne, rangeTwo, rangeThree);
    let min = Math.min(rangeOne, rangeTwo, rangeThree);

    rangeResult = max - min;

    alert(`The range between ${min} and ${max} is ${rangeResult}.`);

    document.getElementById("rangeResult").innerHTML += rangeResult;
}

// Mailing List
function addMailingList() {
    const fname = document.MailingList.fname.value;
    const lname = document.MailingList.lname.value;
    const email = document.MailingList.email.value;
    const zip = Number(document.MailingList.zip.value);
    var newMail = '<div>Welcome ' + fname + ' ' + lname + ' at ' + email + ' in ZIP code ' + zip + '!' + '</div>' ;
    document.getElementById("newMail").innerHTML += newMail;
}