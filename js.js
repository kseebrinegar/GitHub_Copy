/*$(function() {
	$('.hamburger').on('click', function() {
		$('.nav-right, .signup-search').toggle();
	});
});*/


var hamburger = document.getElementsByClassName('hamburger');
var navRight = document.getElementsByClassName('nav-right');
var signUp = document.getElementsByClassName('signup-search');
var event = document.getElementsByClassName('event');
var circle = document.getElementsByClassName('circle');
var orange = document.getElementsByClassName('orange');
var blue = document.getElementsByClassName('blue');
var purple = document.getElementsByClassName('purple');
var glyOrange = document.getElementsByClassName('gly-orange');
var glyBlue = document.getElementsByClassName('gly-blue');
var glyPurple = document.getElementsByClassName('gly-purple');
var rep62M = document.getElementsByClassName('rep62M');
var rep22M = document.getElementsByClassName('rep22M');
var rep117k = document.getElementsByClassName('rep117k');


hamburger[0].addEventListener('click', function() {
	if (navRight[0].style.display === 'none' && signUp[0].style.display === 'none') {
		navRight[0].style.display = 'block';
		signUp[0].style.display = 'block';
	} else {
		navRight[0].style.display = 'none';
		signUp[0].style.display = 'none';
	}
});

window.addEventListener('resize', function() {
	if (this.innerWidth > 960) {
		navRight[0].style.display = 'block';
		signUp[0].style.display = 'block';
	} 
});


for (var i = 0; i < event.length; i++) {

	event[i].addEventListener('mouseout', function(event) {
		var eventClicked = event.target;
		
		untriggerEventRep(eventClicked);

	});

	event[i].addEventListener('mouseover', function(event) {
		var eventClicked = event.target;

		triggerEventRep(eventClicked);
	});
}

function untriggerEventRep(eventClicked) {
	
	for (var j = 0; j < 2; j++) {
		if (eventClicked.getAttribute('data-value') === '1') {
			orange[j].style.transitionDuration = '300ms';
			orange[j].style.boxShadow = 'none';
			glyOrange[j].style.color = '#586069';
			rep62M[0].style.transition = 'transform 300ms ease-in-out';
			rep62M[0].style.transform = 'scale(1.00)';
		} else if (eventClicked.getAttribute('data-value') === '2') {
			blue[j].style.transitionDuration = '300ms';
			blue[j].style.boxShadow = 'none';
			glyBlue[j].style.color = '#586069';
			rep22M[0].style.transition = 'transform 300ms ease-in-out';
			rep22M[0].style.transform = 'scale(1.00)';
		} else if (eventClicked.getAttribute('data-value') === '3') {
			purple[j].style.transitionDuration = '300ms';
			purple[j].style.boxShadow = 'none';
			glyPurple[j].style.color = '#586069';
			rep117k[0].style.transition = 'transform 300ms ease-in-out';
			rep117k[0].style.transform = 'scale(1.00)';
		}

		if (window.innerWidth < 544) {
			glyOrange[0].style.color = '#fb8532';
			glyBlue[0].style.color = '#0366d6';
			glyPurple[0].style.color = '#6f42c1';
		}
		
	}
};

function triggerEventRep(eventClicked) {

	for (var j = 0; j < 2; j++) {
		if (eventClicked.getAttribute('data-value') === '1') {
			orange[j].style.transitionDuration = '300ms';
			glyOrange[j].style.color = '#fb8532';
			rep62M[0].style.transition = 'transform 300ms ease-in-out';
			rep62M[0].style.transform = 'scale(1.05)';

			if (window.innerWidth > 544) {
				orange[j].style.boxShadow = '1px 2px 5px';
			}

		} else if (eventClicked.getAttribute('data-value') === '2') {
			blue[j].style.transitionDuration = '300ms';
			glyBlue[j].style.color = '#0366d6';
			rep22M[0].style.transition = 'transform 300ms ease-in-out';
			rep22M[0].style.transform = 'scale(1.05)';

			if (window.innerWidth > 544) {
				blue[j].style.boxShadow = '1px 2px 5px';
			}

		} else if (eventClicked.getAttribute('data-value') === '3') {
			purple[j].style.transitionDuration = '300ms';
			glyPurple[j].style.color = '#6f42c1';
			rep117k[0].style.transition = 'transform 300ms ease-in-out';
			rep117k[0].style.transform = 'scale(1.05)';

			if (window.innerWidth > 544) {
				purple[j].style.boxShadow = '1px 2px 5px';
			}
		}
	}
};
