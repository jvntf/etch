$(document).ready(function(){

	var squares=parseInt(prompt("How many squares per side?"));
	var squaresize=960/squares;

	
	for(var i = 0; i<(squares*squares); i++){
	
		$("#container").append("<div></div>");
		
	}
	$('div').width(squaresize);
	$('div').height(squaresize);
	$('#container').width(960);
	$('#container').height(960);
  
	
	
			$('div').mouseleave(function(){
			$(this).css('background-color','red');
		});
	
	
});