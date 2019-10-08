//Logo-related variables
const screen = window.document
const content = document.querySelector('#content').style
const completed = document.querySelector('.openingText');

let AniTrigger = false;

//Logo + Loading Progress
const logoLines = anime.timeline({
	targets: '.eyes',
	opacity: [0,1],
	easing: 'easeInOutQuad',
	duration: 3000
}).add({
	targets: '.headpoint',
	opacity: [0,1],
	duration: 2000,
	offset: 1000
}).add({
	targets: '.headertriangle2 path',
	opacity: [0,1],
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 1000,
	offset: 2000
}).add({
	targets: '.headertriangle path',
	strokeDashoffset: [anime.setDashoffset, 0],
	duration: 2000,
	offset: 2000
}).add({
	targets: '.figure',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'linear',
	duration: 5000
});
const glow = anime({
	targets: '.headericonSVG',
	opacity: [1,.5],
	loop: true,
	easing: 'linear',
	direction: 'alternate',
	duration: 2000
	});
completed.innerHTML = completed.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
const loadText = anime.timeline({
	targets: '.openingText .letter',
	opacity: [0,1],
	easing: 'easeInOutQuad',
	duration: 2000,
	delay: (el, i) => 200 * (i+1),
	loop: true
}).add({
	targets: '.openingText',
	opacity: 0,
	easing: 'easeOutQuad',
	duration: 2000,
	delay: 2000
});


//Close logo, Parallax Animation and show content.
const logoEntry = anime.timeline({
	autoplay: false,
	easing: 'linear'
}).add({
	targets: '.loader',
	scaleX: [1, 0],
	duration: 50,
	offset: '+=200'
}).add({
	targets: '.background',
	opacity: 1,
	duration: 3500,
	begin: function() {
		headAni.play(AniTrigger);
	}
});
const showContent = () => {
	content.display = 'block';
}
const exitLoadScreen = () => {
	
	screen.onclick = logoEntry.play;
	completed.innerHTML = "Loading Complete. <br> Click to Enter.";
	const glow = anime({
	targets: '.openingText',
	opacity: [.7,1],
	loop: true,
	easing: 'linear',
	direction: 'alternate',
	duration: 2000
	});
	const loadText = anime({
		targets: '.openingText',
		opacity: [0,1],
		easing: 'easeInOutQuad',
		duration: 1800
	});	

}
window.addEventListener('load', exitLoadScreen);
window.addEventListener('click', showContent);

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
const bloom = anime.timeline({
	targets: '.blooming',
	easing: 'linear',
	autoplay: false
}).add({
	targets: '.blooming',
	width: ['0px', '501px'],
	duration: 3000
}).add({
	targets: '.aa',
	opacity: [0, 1],
	duration: 1500,
	delay: (el, i) => 100 * (i+1),
	offset: 100
}).add({
	targets: '.ab',
	opacity: [0, 1],
	duration: 1000,
	delay: (el, i) => 100 * (i+1),
	offset: 100
});
const contentAni1 = () => {
	if (window.pageYOffset >= 900 && !aniL2Once) {
		aniL2Once = true;
		bloom.play(aniL2Once);
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
