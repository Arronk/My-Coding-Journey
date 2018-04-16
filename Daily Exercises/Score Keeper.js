p1Button = document.querySelector("#P1");
p2Button = document.querySelector("#P2");
p1Display = document.querySelector("#P1Display");
p2Display = document.querySelector("#P2Display");
resetScore = document.querySelector("#reset");
totalScore = document.querySelector("input");
winningScoreDisplay = document.querySelector("#winScore");
p1Score = 0;
p2Score = 0;
gameOver = false;
winningScore = 5;


p1Button.addEventListener("click", function(){
	if(!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			gameOver = true;
			p1Display.style.color = "green";
		}	
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			gameOver = true;
			p2Display.style.color = "green";
		}	
		p2Display.textContent = p2Score;
	}
});

totalScore.addEventListener("change", function(){
	winningScoreDisplay.textContent = totalScore.value;
	winningScore = Number(totalScore.value);
	reset();
});

resetScore.addEventListener("click", reset);

function reset() {
	p2Score = p1Score = 0;
	p2Display.textContent = p2Score;
	p1Display.textContent = p1Score;
	p1Display.style.color = "black";
	p2Display.style.color = "black";
	gameOver = false;
}