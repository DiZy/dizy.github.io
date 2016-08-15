/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
// $('body').scrollspy({
//     target: '.navbar-fixed-top'
// })

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//If navbar-toggle is not visible on initial load, make sure it becomes visible when necessary
$(window).resize(function(){
    if($(window).width() <= 767){
        $('.navbar-toggle:visible').unbind("click");
        //Make navbar dark if menu opened at top
        $('.navbar-toggle:visible').click(function() {
            console.log("navbar clicked");
            setTimeout(function(){
                if($(".navbar-collapse").attr("aria-expanded") == "true"){
                    $(".navbar-default").addClass("navbar-dark");
                }else{
                    $(".navbar-default").removeClass("navbar-dark");
                }
            }, 75);
        });
    }
});
//Make navbar dark if menu opened at top
$('.navbar-toggle:visible').click(function() {
	console.log("navbar clicked");
    setTimeout(function(){
    	if($(".navbar-collapse").attr("aria-expanded") == "true"){
	    	$(".navbar-default").addClass("navbar-dark");
	    }else{
	    	$(".navbar-default").removeClass("navbar-dark");
	    }
	}, 75);
});