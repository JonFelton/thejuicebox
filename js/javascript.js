$(document).ready(function() {
  var mButton = $(".menu-btn")
  menu = $(".hide-small");
  $( mButton ).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
    });
  $(window).resize(function(){
    		var w = $(window).width();
    		if(w > 799 && menu.is(':hidden')) {
    			menu.removeAttr('style');
    		}
  	});

});
