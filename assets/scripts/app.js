let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	resultOperation
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: resultOperation,
	};
	// To Have userinput Log in console or Local Storage Furthermore.
	logEntries.push(logEntry); //The Objects Pushed in Array And Classified As Arrays.
	console.log(logEntry.operation);
	console.log(logEntries);
	console.dir("------------");
}
function createAndWriteOutput(Operator, initialresult, userinput) {
	const DescriptionCalculationResult = `${initialresult} ${Operator} ${userinput}`;
	outputResult(currentResult, DescriptionCalculationResult);
}
// useing conditional statements to more dynamic Code we Have and minimal Hard Codes We Have to
function calculateResult(calculationType) {
	if (
		calculationType !== "ADD" &&
		calculationType !== "SUBTRACT" &&
		calculationType !== "MULTIPLY" &&
		calculationType !== "DIVIDE" ||
		!enteredNumber 
	) {
		return;
	}
	const enteredNumber = getUserNumberInput();
	const initialresult = currentResult;
	let mathOperator;
	if (calculationType === "ADD") {
		currentResult += enteredNumber;
		mathOperator = "+";
	} else if (calculationType === "SUBTRACT") {
		currentResult -= enteredNumber;
		mathOperator = "-";
	} else if (calculationType === "MULTIPLY") {
		currentResult *= enteredNumber;
		mathOperator = "*";
	} else if (calculationType === "DIVIDE") {
		currentResult /= enteredNumber;
		mathOperator = "/";
	}
	createAndWriteOutput(mathOperator, initialresult, enteredNumber);
	// To Have Full Details Of Data Entry in Log.
	writeToLog(calculationType, enteredNumber, initialresult, currentResult);
}
// Addition Calculation
function add() {
	// After Conditional statement Added To Project :UnconventionalCalculator.
	calculateResult("ADD");
	// const enteredNumber = getUserNumberInput();
	// const initialresult = currentResult;
	// currentResult += enteredNumber;
	// createAndWriteOutput("+", initialresult, enteredNumber);
	// // To Have Full Details Of Data Entry in Log.
	// writeToLog("ADD", enteredNumber, initialresult, currentResult);
}
function subtract() {
	// After Conditional statement Added To Project :UnconventionalCalculator.
	calculateResult("SUBTRACT");
	// const enteredNumber = getUserNumberInput();
	// const initialresult = currentResult;
	// currentResult -= enteredNumber;
	// createAndWriteOutput("-", initialresult, enteredNumber);
	// writeToLog("SUBTRACT", enteredNumber, initialresult, currentResult);
}
function divide() {
	calculateResult("DIVIDE"); //implicit Check

	// const enteredNumber = getUserNumberInput();
	// const initialresult = currentResult;
	// createAndWriteOutput("/", initialresult, enteredNumber);
	// writeToLog("DIVIDE", enteredNumber, initialresult, currentResult);
}
function multiply() {
	calculateResult("MULTIPLY"); //How much Be Clear And Better Code You Have Now.!?
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
