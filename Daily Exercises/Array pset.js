function printReverse(array) {
	for (let i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

function isUniform(array) {
	compare = array[0];
	for (let i = 1, j = array.length; i < j; i++) {
		if (array[i] !== compare) {
			return false;
		} 
	}
	return true;
}	

function sumArray(array) {
	sum = 0;
	for (let i = 0, j = array.length; i < j; i++) {
		sum += array[i];
	}	
	console.log(sum);
}

function max(array) {
	maxValue = array[0];
	if (array.some(isNaN)) {
		console.log("Error: Array needs to include only numeric values!");
	} else {
		for (let i = 1, j = array.length; i < j; i++) {
			if (array[i] > maxValue) {
				maxValue = array[i]; 
			}	
		}
	console.log(maxValue);
	}	
}
