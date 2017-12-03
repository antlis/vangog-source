jQuery(function($) {

   //:tel to :callto for desctop browser
   $('a[href^=\'tel:\']').each(function() {
      var target = 'call-' + this.href.replace(/[^a-z0-9]*/gi, '');
      var link = this;
   
      // load in iframe to supress potential errors when protocol is not available
      $('body').append('<iframe name="' + target + '" style="display: none"></iframe>');
      link.target = target;
   
      // replace tel with callto on desktop browsers for skype fallback
      if (!navigator.userAgent.match(/(mobile)/gi)) {
          link.href = link.href.replace(/^tel:/, 'callto:');
      }
   });
   
   //Enable swiping...
   $('.carousel-inner').swipe({
      //Generic swipe handler for all directions
      swipeLeft: function(event, direction, distance, duration, fingerCount) {
         $(this).parent().carousel('next');
      },
      swipeRight: function() {
         $(this).parent().carousel('prev');
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
      threshold: 0
   });
      
   // Carousel mouse scroll   
   $('.mouse').on('click', function(e) {
      e.preventDefault();
      
      $('body, html').animate({
        scrollTop: $('.scroll-to-this').offset().top - 0
      }, 1000);
   });

});