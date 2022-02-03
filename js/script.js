// header
/*
$(".icon div").click(function(){
	$(".navbar").fadeToggle(50);
});
*/
// 햄버거
let menu = document.querySelector('#menu_btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

// 배너
var swiper = new Swiper(".home_slider", {
	spaceBetween: 20,
	effect: "fade",
	grabCursor: true,
	loop: true, 
	centeredSlides: true,
	autoplay: {
		delay: 5500,
		disableOnInteraction: false,
	  },
  });

// feature
var swiper = new Swiper(".feature_slider", {
	spaceBetween: 20,
	grabCursor: true,
	loop: true, 
	centeredSlides: true,
	autoplay: {
		delay: 5500,
		disableOnInteraction: false,
	  },

	  breakpoints: {
		  0: {
			  slidesPerView: 1,
		  },
		  768: {
			  slidesPerView: 3,
		  },
		  1024: {
			slidesPerView: 3,
		},
	  },
  });

// trainers
var swiper = new Swiper(".trainers_slider", {
	spaceBetween: 20,
	grabCursor: true,
	loop: true, 
	centeredSlides: true,
	autoplay: {
		delay: 5500,
		disableOnInteraction: false,
	  },

	  breakpoints: {
		  0: {
			  slidesPerView: 1,
		  },    
		  768: {
			  slidesPerView: 3,
		  },
		  1024: {
			slidesPerView: 3,
		},
	  },
  });