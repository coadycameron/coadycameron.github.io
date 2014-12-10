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

        top_menu_height = $('.totalpave-top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#totalpave-nav-bar', offset: top_menu_height + 25 });
		$('.external-link').unbind('click');

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#totalpave-top');
        });
		
		 // scroll to top when click logo
        $('#btn-logo').click(function(e){
            e.preventDefault();
            scrollTo('#totalpave-top');
        });
		
		

        // scroll to specific id when click on menu
        $('.totalpave-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });
		
		//scroll to totalpave-solution when click on read more button in carousel
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
        $('.totalpave-top-menu ').stickUp();

        // gallery category
        $('.totalpave-gallery-category a').click(function(e){
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
   var myLatlng = new google.maps.LatLng(45.9455,-66.6381);
	var mapOptions = {
  		zoom: 17,
  		center: myLatlng,
		scrollwheel: false,
		mapTypeControlOptions: {
         mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
    }
}

var stylez = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 } // <-- THIS
      ]
    }
];

var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
map.mapTypes.set('tehgrayz', mapType);
map.setMapTypeId('tehgrayz');

var image = 'images/custom-marker.png';
var marker = new google.maps.Marker({
    position: myLatlng,
    title:"TotalPave, 8 Garland Court (Enterprise UNB Building #1",
	icon: image
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

// Fade in from the left effect for totalpave-service

jQuery(document).ready(function() {
	jQuery('#totalpave-carousel').addClass('hideme').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	
});

jQuery(document).ready(function() {
	jQuery('.totalpave-service').addClass('hideme').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	
});

jQuery(document).ready(function() {
	jQuery('.totalpave-team').addClass('hideme').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	
});

jQuery(document).ready(function() {
	jQuery('#totalpave-contact').addClass('hideme').viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 100
	});
	
});
























