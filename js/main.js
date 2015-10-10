
//var secondNumberClicked;
var operation;
$displayBox = $('#display-box');
console.log('hi');
var total = 0;
var firstNumber = "";
var secondNumber = "";

// click on number function
var numberClick = function() {

	//if (numberClicked === "undefined") {	
		$('.number').click(function() {
			//input number and store to use later
			if (operation === undefined) {
				firstNumber += $(this).text();
				//side effects: display number in display-box (render)
				$displayBox.text(firstNumber);
				console.log(firstNumber);
			} else {
				secondNumber += $(this).text();
				//side effects: display number in display-box (render)
				$displayBox.text(secondNumber);
				console.log(secondNumber);
			}
		});

};



// click on operation
var operationClick = function() {
		// input operation
	$('.operation').click(function() {
			//side effects: store operation to use
		operation = $(this).text();
		console.log(operation);
	});	
};

// perform math function
	// input first number
	// input second number
	// perform math
	// output answer
	// render

var hitEqual = function() {
	$('#equal').click(function() {
		doMath();
		$displayBox.text(total);
		clearCalculator();
	});
};

var doMath = function() {
	if (operation === "+"){
		total = parseFloat(firstNumber) + parseFloat(secondNumber);
	} else if (operation === "-") {
		total = parseFloat(firstNumber) - parseFloat(secondNumber);
	} else if (operation === "/") {
		total = parseFloat(firstNumber) / parseFloat(secondNumber);
	} else if (operation === "x") {
		total = parseFloat(firstNumber) * parseFloat(secondNumber);
	}
	console.log(total);
	
};

var clearCalculator = function () {
		firstNumber = "";
		secondNumber = "";
		operation = undefined
		total = 0;
}

var clearDisplay = function () {
	$('#clear').click(function () {
		$displayBox.text('');
		clearCalculator();
	});
}




clearDisplay();
hitEqual();		
numberClick();
operationClick();

	
/*
//click second number
var secondNumberClick = function () {
	
		$('.number').click(function() {
		//input number and store to use later
			secondNumberClicked = $(this).text();
			//console.log(secondNumberClicked);	
			//side effects: display number in display-box (render)
			$displayBox.text(secondNumberClicked);
			
		});
	
}*/







