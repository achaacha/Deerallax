//Logo
var textWrapper = document.querySelector('.openingText');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var headAniTrigger = false;

var logoLines = anime.timeline({
	targets: '.eyes',
	opacity: [0,1],
	easing: 'easeInOutQuad',
	duration: 3000
}).add({
	targets: '.headpoint',
	opacity: [0,1],
	easing: 'easeInOutQuad',
	duration: 2000,
	offset: 1000
}).add({
	  targets: '.figure',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  opacity: [.5,1],
	  easing: 'linear',
	  duration: 5000,
	  offset: 2000
}).add({
	targets: '.tS1, .glow1',
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 3500,
	easing: 'easeOutCirc',
	offset: 2100
}).add({
	targets: '.tS2, .tL1, .glow2',
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 3200,
	easing: 'easeOutCirc',
	offset: 2300
}).add({
	targets: '.tS3, .tL2, .glow3',
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 3000,
	easing: 'easeOutCirc',
	offset: 2600
}).add({
	targets: '.tL3',
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 3000,
	easing: 'easeOutCirc',
	offset: 3000
}).add({
	targets: '.openingText .letter',
    opacity: [0,1],
    easing: 'easeInOutQuad',
    duration: 1800,
    delay: (el, i) => 150 * (i+1),
	offset: 2000
});
anime({
	targets: 'svg .glow path',
	opacity: [1,.4],
	loop: true,
	easing: 'linear',
	direction: 'alternate',
	duration: 2000
});

//Start Parallax Animation and show content.
var logoEntry = anime.timeline({
	autoplay: false,
	easing: 'linear'
}).add({
	targets: '.openingText, .openingTextG',
	opacity: [1,0],
	duration: 500
}).add({
	targets: '.logo-container',
	scaleX: [1, 0],
	duration: 125,
	offset: '+=200'
}).add({
	targets: '#nav',
	opacity: [0,1],
	translateY: [350, 0],
	duration: 1500,
	offset: '-=50',
	begin: function() {
		entryActive = true;
		headAni.play(headAniTrigger);
    }
}).add({
	targets: '.background',
	opacity: [.3,1],
	duration: 2700,
	offset: '-=1300'
});
var screen = window.document
var click1 = false;
var showContent = document.querySelector('#content').style
screen.onclick = logoEntry.play;
window.addEventListener('click', () => {
	if (!click1) {
		click1 = true;
		logoLines.seek(logoLines.duration * 100);
		showContent.display = 'block';
	}
});


var headAni = anime({
		targets: '.layer.deer',
		opacity: [0,1],
		translateY: [350, 0],
		duration: 2500,
		delay: (el, i) => 800 * i,
		easing: 'easeOutBack',
		autoplay: false
	});

//Cancel HeadParallax Animations on scroll
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 1) {
		headAni.seek(headAni.duration * 100);
		
	}
});



//Sticky nav
var nav = document.querySelector('#nav');
var navTop = nav.offsetTop;

function stickyNavigation() { 
  if (window.scrollY >= navTop) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavigation);



//Top Parallax Scroll Function 
var depth, i, layer, len, movement, translate3d;
var layers = document.querySelectorAll("[data-type='parallax']");

window.addEventListener('scroll', () => {
	
	for (i = 0, len = layers.length; i < len; i++) {
													
	  layer = layers[i];
	  depth = layer.getAttribute('data-depth');
	  movement = -(window.pageYOffset * depth);
	  translate3d = 'translate3d(0, ' + movement + 'px, 0)';
	  layer.style['-webkit-transform'] = translate3d;
	  layer.style['-moz-transform'] = translate3d;
	  layer.style['-ms-transform'] = translate3d;
	  layer.style['-o-transform'] = translate3d;
	  layer.style.transform = translate3d;
	}
});





//L2 Animation
anime({
  targets: '#shadow2',
  opacity: [0.3, 1],
  direction: 'alternate',
  loop: true,
  duration: 2000,
  easing: 'easeInOutSine' 
});


var aniL2Once = false;

window.addEventListener("scroll", () => {

  //Gather y position for testing
	console.log('y scroll pixels are currently at ' + window.pageYOffset);

	if (window.pageYOffset >= 1000 && !aniL2Once) {
		aniL2Once = true;
		anime({
			targets: '#bg2, #deer2',
			opacity: [0, 1],
			duration: 3000,
			delay: 2000,
			easing: 'easeOutQuad' 
		});
	}
});