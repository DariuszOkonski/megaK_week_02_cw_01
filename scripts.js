const SPECIFITY = 2;

const multiplication = (a , b) => {
    return (a * b).toFixed(SPECIFITY);
}

const division = (a, b) => {
    if(b === 0)
        return NaN;
    return (a / b).toFixed(SPECIFITY);
};

const addition = (a, b) => {
    return (a + b).toFixed(SPECIFITY);
};

const subtraction = (a, b) => {
    return (a - b).toFixed(SPECIFITY);
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

const sendResultToHTML = (firstNumber, secondNumber, multiplication, addition, subtraction, division) => {
    document.body.innerHTML = `
        <h2>Your numbers: ${firstNumber}, ${secondNumber}</h2>
        <p>-----------------------------------</p>
        <p>multiplication: ${multiplication}</p>
        <p>addition: ${addition}</p>
        <p>subtraction: ${subtraction}</p>
        <p>division: ${(isNaN(division) ? "Can't divide by 0" : division)}</p>
    `;
}

const sendResultToConsole =(firstNumber, secondNumber, multiplication, addition, subtraction, division) => {
    console.log(`Your numbers: ${firstNumber}, ${secondNumber}`)
    console.log('-----------------------------------');
    console.log("multiplication: " + multiplication);
    console.log("addition: " + addition);
    console.log("subtraction: " + subtraction)
    console.log("division: " + (isNaN(division) ? "Can't divide by 0" : division));
}

const main = () => {
    const firstNumber = getCorrectNumber("first");
    const secondNumber = getCorrectNumber("second");

    const multiplicationResult = multiplication(firstNumber, secondNumber);
    const additionResult = addition(firstNumber, secondNumber);
    const subtractionResult = subtraction(firstNumber, secondNumber);
    const divisionResult = division(firstNumber, secondNumber);

    sendResultToConsole(firstNumber, secondNumber, multiplicationResult, additionResult, subtractionResult, divisionResult)
    sendResultToHTML(firstNumber, secondNumber, multiplicationResult, additionResult, subtractionResult, divisionResult)
}

main()