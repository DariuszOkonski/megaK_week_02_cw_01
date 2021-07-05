const multiplication = (a , b) => {
    return a * b;
}

const division = (a, b) => {
    if(b === 0)
        return -1;
    return (a / b).toFixed(2);
};

const addition = (a, b) => {
    return (a + b).toFixed(2);
};

const subtraction = (a, b) => {
    return (a - b).toFixed(2);
};

const checkIfCorrectNumberType = (someArgument) => {
    if(isNaN(someArgument) || someArgument === "" || typeof someArgument === "object")
        return false;

    return true;
}

const getCorrectNumber = (message) => {
    let number = prompt(`Provide ${message} number: `)
    while(!checkIfCorrectNumberType(number)){
        number = prompt(`Incorrect ${message} number, try again: `)
    }
    return Number(number);
}

const main = () => {
    const firstNumber = getCorrectNumber("first");
    const secondNumber = getCorrectNumber("second");

    console.log(`Your numbers: ${firstNumber}, ${secondNumber}`)
    console.log('-----------------------------------');

    console.log("multiplication: " + multiplication(firstNumber, secondNumber));
    console.log("addition: " + addition(firstNumber, secondNumber));
    console.log("subtraction: " + subtraction(firstNumber, secondNumber))

    const divisionResult = division(firstNumber, secondNumber);
    console.log("division: " + (divisionResult == -1 ? "Can't divide by 0" : divisionResult));
}

main()