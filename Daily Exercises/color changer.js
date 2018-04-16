button = document.getElementById("changeMe");
isPurple = false;

button.addEventListener("click", function () {
	if(isPurple) {
	document.body.style.background = "white";	
	} else {
	document.body.style.background = "purple";
	}
	isPurple = !isPurple;
});