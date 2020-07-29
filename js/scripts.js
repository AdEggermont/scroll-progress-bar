$(document).ready(function() {

	/* Scroll progress bar */

	var $window = $(window);
	var pageHeight = Math.round($('html').height());
	var currentScrollPosition = 0;
	var percentage = 0;

	$(document).ready(function() {
		setProgressBar();
	});

	$window.on('scroll', setProgressBar);

	function setProgressBar() {
		currentScrollPosition = $window.scrollTop() + $window.height();
		percentage = Math.round(currentScrollPosition / pageHeight * 100);

		$('#js-progress').css({ 'width' : percentage + '%' });
	}

});
