function toCase(text) {
  // write your code here
	var toLower=text.toLowerCase();
	var toUpper= text.toUpperCase();
	return toLower+"-"+toUpper;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
