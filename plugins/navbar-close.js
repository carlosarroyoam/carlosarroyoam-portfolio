export default () => {
	// When navbar is show event is called
	$('body').on('show.bs.collapse', '#mainNavbar', function () {
		$('.menu-icon, .menu-close-icon, .navbar-overlay').toggleClass('d-block d-none');
	});

	// When navbar is hide event is called
	$('body').on('hide.bs.collapse', '#mainNavbar', function () {
		$('.menu-icon, .menu-close-icon, .navbar-overlay').toggleClass('d-block d-none');
	});

	// When navbar is shown, attach onClick event to ".close-nav-onclick"
	$('body').on('shown.bs.collapse', '#mainNavbar', function () {
		$('.close-nav-onclick').bind('click', function () {
			if ($('#navbarToggler').is(':visible')) {
				$('#mainNavbar').collapse('hide');
			}
		});
	});

	// When navbar is hidden, remove onClick event to ".close-nav-onclick"
	$('body').on('hidden.bs.collapse', '#mainNavbar', function () {
		$('.close-nav-onclick').unbind('click');
	});
}