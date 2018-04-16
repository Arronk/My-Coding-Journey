todos = ["Buy new turtle"];

input = prompt("what would you like to do?");

while(input !== "quit") {
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodos();
	} else if(input === "delete") {
		deleteTodos();
	}
	// ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, you quit the app");

		
function listTodos(){
	console.log("***************");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
console.log("***************");	
}

function addTodos(){
	// ask for new todo
	newTodo = prompt("Enter new todo");
	// add to todos array
	added = todos.push(newTodo);
	console.log("You added at index " + added +": " + newTodo);	
}

function  deleteTodos(){
	deleteIndex = prompt("Enter Todo Index to be deleted");
	if (deleteIndex > -1) {
		removed = todos.splice(deleteIndex, 1);
		console.log("You removed: "+ removed);
	}
}
	