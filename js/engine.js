$(document).ready(function(){

	// карусель
	$('#foo1').owlCarousel({
		loop:false,
		nav:true,
		dots: true,
		items:1,
		autoplay : false,
		animateOut: 'fadeOut',
		autoplayTimeout : 6000,
		navText: ["", ""],
		autoHeight:true
	});

	$('#foo2').owlCarousel({
		loop:false,
		nav:false,
		dots: true,
		items:5,
		autoplay : false,
		animateOut: 'fadeOut',
		autoplayTimeout : 6000,
		navText: ["", ""]
	});


	$(window).resize(function(){
		if ($('body').width() > 630) {
			$('body').removeClass('o-menu');
			$('.header .top').css('height', 'auto');
		}
	});

	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.header .close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				h = $(document).height() - 15;
				$('body').addClass('o-menu');
				$('.header .top').height(h);

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	

	$('#feedback-form').validate()


	// $('#navbar').hammer().on('panleft', function(){
	// 	$('body').removeClass('o-menu');
	// });

});

// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//call plugin function after DOM ready
addLoadEvent(function(){
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/outdatedbrowser/lang/ru.html'
	})
});
// =/заглушка для IE
