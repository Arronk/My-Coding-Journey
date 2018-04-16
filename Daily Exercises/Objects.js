movies = [
	{
		title: "In Bruges", 
		rating: "5 stars", 
		hasWatched: "watched"
	},
	{
		title: "Frozen", 
		rating: "4.5 stars", 
		hasWatched: "not seen"
	},
	{
		title: "Mad Max Fury Road", 
		rating: "5 stars", 
		hasWatched: "seen"
	},
	{
		title: "Les Miserables",
		rating: "3.5 stars",
		hasWatched: "not seen"	
	}
]

// function myMovies() {
// 	// Iterate through movies array
// 	for (let i = 0, j =  movies.length; i < movies.length; i++) {
// 		// console.log string of value pairs saying if I have watched or not watched each movie in the movies array and what rating it has
// 		console.log("You have "  + movies[i].hasWatched  + " \"" + movies[i].title + "\" - " + movies[i].rating);				
// 	}
// }

function myMovies() {
	movies.forEach(function(movie){
		console.log("You have "  + movie.hasWatched  + " \"" + movie.title + "\" - " + moview[dv.rating);
	});
}