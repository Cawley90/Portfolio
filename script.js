$(document).ready(function(){
	
	$('#intcorgi').fadeIn(1500);
	$('#intcorgi').delay(1000).fadeOut(1000);
	$('#cselect').delay(3500).slideDown("medium");
	$('#pdetails').delay(3500).slideDown("medium");
	var about = $('#pabout');
	var pDetails = $('#projbdy');
	var pic = $('#ppic');
	var pTitle = $("#projtitle");


	playSong();

	//p = project (what the user clicks on), t = title, v = details, i = image
	function Project(p, t, v, i){
		this.p = p;
		this.t = t;
		this.v = v;
		this.i = i;


		p.click(function() {

				pic.empty();
				pTitle.text(t);
				pDetails.text(v);
				pic.css("background-image", i);

			
		})

		console.log(t);
	}


	var businessPg = new Project ($('#businesspg'), "Business Page", "This is a practice business page I did.","url(img/business1.jpg)");
	var theList = new Project ($('#thelist'), "The List", "Text 1", "url(img/list1.jpg)");
	var quiz = new Project ($('#quiz'), "Internetiquette Quiz", "Text 2", "url(img/quiz1.jpg)");
	var sfighter = new Project ($('#sfighter'), "Street Figher", "Text 3", "url(img/sf1.jpg)");
	var fetch = new Project ($('#fetch'), "FetchIt", "Text 4", "url(img/fetch1.jpg)");
	var hotCold = new Project ($('#hotcold'), "Hot/Cold", "Text 5", "img5");
	var stackJx = new Project ($('#stackajax'), "Stacker Ajax", "Text 6", "img6");

	$('#pause').click(function() {
		$("#mksong")[0].pause();
	})


});

	function playSong () {
	$('#mksong')[0].volume = 0.2;
	$('#mksong')[0].play();

}