// Toggle li elements on click 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});	
	event.stopPropagation();
});

// Input new todo, clear input box after pressing enter and appending item to todo list
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		// grabbing new todo text from input
		let todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todoText + "</li>");
	}
});

// toggle the input text box display
$("#plusIcon").click(function(){
	$("input[type='text']").fadeToggle();
});