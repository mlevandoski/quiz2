(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouseover');
	$click     = $('.click');
	$submit       = $('.submit');
	$timeout   = $('.timeout');

	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.on('click', function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').foreach(function() {
				$(this).fadeOut('slow');
			});
			$(this).appendwith('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	var $titleCookie;
	//Get Title / Change It
	$("#action-button").click(function(){
		$.ajax({
			url: "http://www.mattbowytz.com/simple_api.json?data=quizData",
			data: {
				format: 'json'
			},
			error: function() {
				$('#title').html('<p>Error, sad day :(</p>');
			},
			success: function(data){
				document.getElementById("action-button2").style.display='inline';
				document.getElementById("action-button").innerHTML="Change It";
				var $title = $('<h1>').text(data.data[Math.floor(Math.random()*data.data.length)]);
				$('#title').html($title);
				$titleCookie = $title;
			},
			type: 'GET'
		});
	});

	//keep it
	$("#action-button2").click(function(){
		document.getElementById("action-button2").style.display='none';
		document.getElementById("action-button").innerHTML="Get Title";
		document.cookies="title="+$titleCookie.text();
		$('#title').append(document.cookies.split("=")[1]);
		//$('#title').append($titleCookie.text());
	});

	$(document).on(ready, function() {
		setTimeout({
			//$timeout.fadeIn('slow');
		}, 1000);
	});

})(jQuery);
