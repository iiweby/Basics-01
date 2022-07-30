const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
	return parseInt(userInput.value);
}


function createAndWriteLog(operator, resultBeforeCalc, Calcnumber) {
	const calcDesc = `${resultBeforeCalc} ${operator} ${Calcnumber}`;
	outputResult(currentResult, calcDesc);
}
const asd = 'sdas'
function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

const asdaSas = 'wsds'

function add() {
	const enteredNum = getUserInput();
	const initialResult = currentResult;
	currentResult += enteredNum;
	createAndWriteLog("+", initialResult, enteredNum);
	writeToLog("ADD", initialResult, enteredNum, currentResult);
}

function subtract() {
	const enteredNum = getUserInput();
	const initialResult = currentResult;
	currentResult -= enteredNum;
	createAndWriteLog("-", initialResult, enteredNum);
	writeToLog("SUBTRACT", initialResult, enteredNum, currentResult);
}
function multiply() {
	const enteredNum = getUserInput();
	const initialResult = currentResult;
	currentResult *= enteredNum;
	createAndWriteLog("*", initialResult, enteredNum);
	writeToLog("MULTIPLY", initialResult, enteredNum, currentResult);
	t;
}

function divide() {
	const enteredNum = getUserInput();
	const initialResult = currentResult;
	currentResult /= enteredNum;
	createAndWriteLog("/", initialResult, enteredNum);
	writeToLog("DIVIDE", initialResult, enteredNum, currentResult);
}

subtractBtn.addEventListener("click", subtract);
addBtn.addEventListener("click", add);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
