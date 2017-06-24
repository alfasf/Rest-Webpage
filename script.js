$(document).ready(function(){
	$(window).scroll(function(){
		var scrolltop = $(this).scrollTop();
           if(scrolltop >=20){
                $('.mini-topheader').css('display','none');
            
          }else{
                $('.mini-topheader').css('display','block');
           }

	});          
});