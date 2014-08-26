$(document).ready(function(){
	
	$('#intcorgi').fadeIn(1500);
	$('#intcorgi').delay(1000).fadeOut(1000);
	$('#cselect').delay(3500).slideDown("medium");

	//playSong();

});

	function playSong () {
	$('#mksong')[0].volume = 0.5;
	$('#mksong')[0].play();

}