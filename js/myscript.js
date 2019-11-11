$(document).ready(function() {
           
         $("#counterOne").animateNumbers(3321, true, 8000);
         $("#counterTwo").animateNumbers(4321, true, 8000);
         $("#counterThree").animateNumbers(5000, true, 8000);
         $("#counterFour").animateNumbers(8000, true, 8000);
                   
});


//Nav bar


$(document).ready(function (){

	$(window).scroll(function () {
		var scroll= $(window).scrollTop();
		if (scroll > 300) {
			$(".navbar-area").css("background","rgba(0,0,0, .5)");
		}
		else{
			$(".navbar-area").css("background","");
		}
	})

});