$(function () {
    // Blur to focus on scroll images
    var blurScroll = 0;
    var diverPhoto = $( '#flex-content-section-1' ).offset().top;
    var crewPhoto = $( '#flex-content-section-5' ).offset().top;
	var forestPhoto = $( '#flex-content-section-8' ).offset().top;
	var microplasticsPhoto = $( '#flex-content-section-16' ).offset().top;

	$( '#flex-content-section-1 img' ).addClass('blur-focus');
	$( '#flex-content-section-5 img' ).addClass('blur-focus');
	$( '#flex-content-section-8 img' ).addClass('blur-focus');
	$( '#flex-content-section-16 img' ).addClass('blur-focus');

    $(window).scroll(function () {
        blurScroll = $(window).scrollTop();

        // diver photo
        if (blurScroll > diverPhoto + 50 ) {
			$('#flex-content-section-1 img').removeClass('blur-focus');
			$('#flex-content-section-1 img').addClass('focus-blur');
        }

        // crew photo
        if (blurScroll > crewPhoto + 50 ) {
			$('#flex-content-section-5 img').removeClass('blur-focus');
			$('#flex-content-section-5 img').addClass('focus-blur');
        }

        // forest photo
        if (blurScroll > forestPhoto + 50 ) {
            $('#flex-content-section-8 img').removeClass('blur-focus');
            $('#flex-content-section-8 img').addClass('focus-blur');
        }

		// microplastics photo
		if (blurScroll > microplasticsPhoto + 50 ) {
            $('#flex-content-section-16 img').removeClass('blur-focus');
            $('#flex-content-section-16 img').addClass('focus-blur');
        }
    });
});