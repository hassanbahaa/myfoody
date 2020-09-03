/* global $,document, window*/ // solve >>  ERROR: 'document' is not defined. [no-undef]	




var $;


$(window).on("load", function () {
	'use strict';
	$(".spinner").fadeOut(1000, function () {
		$(".overlay-screen").fadeOut(500, function () {
			$("body").css("overflow", "auto");
		});
	});
	
});


$(".foodgallery").on("mouseenter mouseleave", function () {
	'use strict';
	$(this).toggleClass("hs", 5000);
	/*اشتغلللللللت*/
});

$(".foodgallery").on("click", function () {
	$(this).addClass("selected"),$(this).siblings().removeClass("selected");
}); /*اشتغلتتتتتت*/

/*
$(".foodgallery")*/





$(document).ready(function () {
	
	$(".meal1").on("click", function () {
		$('.meal1div').css("visibility","visible"),$('.meal1div').siblings().css("visibility","hidden")
		
	});
	
	
	
	
	
	$(".meal2").on("click", function () {
	$('.meal2div').css("visibility","visible"),$('.meal2div').siblings().css("visibility","hidden")

});
	
	
	$(".meal3").on("click", function () {
	$('.meal3div').css("visibility","visible"),$('.meal3div').siblings().css("visibility","hidden")

});
	$(".meal4").on("click", function () {
	$('.meal4div').css("visibility","visible"),$('.meal4div').siblings().css("visibility","hidden")

});
	
	
	
	
	
	
	
	
	
	
	
	
	
});


/*
$(document).ready(function () {
	
	$(".foodgallery").on("click", function () {
		
		if ( $(".meal2").hasClass("selected") ) { $('.meal2div').css("visibility","visible"),$('.meal2div').siblings().css("visibility","hidden"); }
		else{
			
			$('.meal2div').hide();
		}
		
	});

	
});


*/





/*$(document).ready(function () {
	$('.meal1').on("click", function () {
		$('.meal1pic').toggle(),$(".meal2div").hide();
	});
	$('.meal2').on("click", function () {
		$('.meal2pic').show(),$(".meal1div").toggle();
	});
	
	
});*/


/*
$(document).ready(function () {
	
	$(".meal2").click(function () {
		if ( $(".meal2").hasClass("selected") ) { $(".imgbg").empty();$(".imgbg").append("<img class='gphoto' src='images/meals/2.png'>") ;console.log("yes"); };
		
		
	});
	
});
*/


/*	"<img class='gphoto' src='images/meals/1.png'>"*/