$(document).ready(function(){

	 $('a.read_more').click(function(){ /* find all a.read_more elements and bind the following code to them */
	 	if ( $('.more_text').css("display") === "none") {
   			$('.more_text').slideDown();
   			$('.read_more').text('Read Less');	
		}
        else if ( $('.more_text').css("display") != "none") {
   			$('.more_text').slideUp();	
   			$('.read_more').text('Read More');
		}
        

    });

}); 