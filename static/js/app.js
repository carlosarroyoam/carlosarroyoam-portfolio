$(document).ready(function() {
	// When navbar is show event is called
	$('#mainNavbar').on('show.bs.collapse', function() {
		$('.menu-icon')
			.removeClass('d-block')
			.addClass('d-none');

		$('.menu-close-icon')
			.removeClass('d-none')
			.addClass('d-block');
	});

	// When navbar is hide event is called
	$('#mainNavbar').on('hide.bs.collapse', function() {
		$('.menu-icon')
			.removeClass('d-none')
			.addClass('d-block');

		$('.menu-close-icon')
			.removeClass('d-block')
			.addClass('d-none');
	});

	// When navbar is shown, attach onClick event to ".section-content, .nav-item"
	$('#mainNavbar').on('shown.bs.collapse', function() {
		$('html').bind('click', function() {
			if ($('#navbarToggler').is(':visible')) $('#mainNavbar').collapse('hide');
		});
	});

	// When navbar is hidden, remove onClick event to ".section-content, .nav-item"
	$('#mainNavbar').on('hidden.bs.collapse', function() {
		$('html').unbind('click');
	});
});
