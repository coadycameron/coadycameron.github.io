var top_menu_height = 0;
jQuery(function($) {
		$(window).load( function() {
			$('.external-link').unbind('click');	
		});
		
        $(document).ready( function() {

            // load google map
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
            'callback=initialize';
        document.body.appendChild(script);

        top_menu_height = $('.templatemo-top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#templatemo-nav-bar', offset: top_menu_height + 25 });
		$('.external-link').unbind('click');

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#templatemo-top');
        });
		
		 // scroll to top when click logo
        $('#btn-logo').click(function(e){
            e.preventDefault();
            scrollTo('#templatemo-top');
        });
		
		

        // scroll to specific id when click on menu
        $('.templatemo-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });
		
		//scroll to templatemo-solution when click on read more button in carousel
		$('#btn-read-more').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });

        // to stick navbar on top
        $('.templatemo-top-menu ').stickUp();

        // gallery category
        $('.templatemo-gallery-category a').click(function(e){
            e.preventDefault(); 
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();  
        });

        //gallery light box setup
        $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        });
    });
});

function initialize() {
   var myLatlng = new google.maps.LatLng(45.9312486,-66.6573474);
	var mapOptions = {
  		zoom: 16,
  		center: myLatlng,
		scrollwheel: false
}

var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"TotalPave, 50 Crowther Lane"
});

// To add the marker to the map, call setMap();
marker.setMap(map);
}

// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}

// Fade in from the left effect for templatemo-service

jQuery(document).ready(function() {
	jQuery('#templatemo-carousel').addClass('hideme').viewportChecker({
		classToAdd: 'visible animated fadeInLeft',
		offset: 100
	});
	
});

jQuery(document).ready(function() {
	jQuery('.templatemo-service').addClass('hideme').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	
});

jQuery(document).ready(function() {
	jQuery('.templatemo-team').addClass('hideme').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	
});

jQuery(document).ready(function() {
	jQuery('#templatemo-contact').addClass('hideme').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	
});

// Change icon images on rollover in service section


$('#robana').on({
    mouseover: function(){
        $('img.cloud').attr('src', 'images/cloud2.png');
    },
     mouseleave: function(){
        $('img.cloud').attr('src', 'images/cloud.png');
    },
});

$('#eascol').on({
    mouseover: function(){
        $('img.mobile').attr('src', 'images/mobile2.png');
    },
     mouseleave: function(){
        $('img.mobile').attr('src', 'images/mobile.png');
    },
});
























