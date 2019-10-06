//Logo-related variables
const textWrapper = document.querySelector('.openingText');
const screen = window.document
const showContent = document.querySelector('#content').style

let headAniTrigger = false;
let click1 = false;

//Logo 
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
const logoLines = anime.timeline({
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

//Close logo, Parallax Animation and show content.
const logoEntry = anime.timeline({
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
	targets: '.background',
	opacity: [.3,1],
	duration: 2700,
	begin: function() {
		headAni.play(headAniTrigger);
	}
});
screen.onclick = logoEntry.play;

const exitLoadScreen = () => {
	
	if (!click1) {
		click1 = true;
		logoLines.seek(logoLines.duration * 100);
		showContent.display = 'block';
	}
}
window.addEventListener('click', exitLoadScreen);


const headAni = anime.timeline({
	targets: '#nav',
	opacity: [0,1],
	translateY: [350, 0],
	duration: 1500,
	easing:'linear',
	autoplay: false
}).add({
	targets: '.layer.deer',
	opacity: [0,1],
	translateY: [350, 0],
	duration: 2500,
	delay: (el, i) => 800 * i,
	easing: 'easeOutBack'
});

//Cancel HeadParallax Animations on scroll
const headAniCancel = () => {	
	if (window.pageYOffset > 1) {
		headAni.seek(headAni.duration * 100);	
	}
}
window.addEventListener('scroll', headAniCancel);



//Sticky nav variables
const nav = document.querySelector('#nav');
const navTop = nav.offsetTop;

//Sticky nav
const stickyNavigation = () => { 
  if (window.scrollY >= navTop) {
	document.body.classList.add('fixed-nav');
  } else {
	document.body.classList.remove('fixed-nav');
  }
}
window.addEventListener('scroll', stickyNavigation);



//Top Parallax Scroll Variables
const layers = document.querySelectorAll("[data-type='parallax']");
let depth, i, layer, len, movement, translate3d;

//Top Parallax Scroll
const stickyParallax = () => {
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
}
window.addEventListener('scroll', stickyParallax);






//Content Variables
let aniL2Once = false;

//Content Parallax Animation
anime({
  targets: '#shadow2',
  opacity: [0.3, 1],
  direction: 'alternate',
  loop: true,
  duration: 2000,
  easing: 'easeInOutSine' 
});

const contentAni1 = () => {
	if (window.pageYOffset >= 900 && !aniL2Once) {
		aniL2Once = true;
		anime({
			targets: '#bg2, #deer2',
			opacity: [0, 1],
			duration: 3500,
			delay: (el, i) => 1000 * i,
			easing: 'easeOutQuad' 
		});
	}
}
window.addEventListener('scroll', contentAni1);