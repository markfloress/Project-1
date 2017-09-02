$( document ).ready(function() {
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    autoPlay: 3000
  });

  $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 700, function(){
            window.location.hash = hash;
          });
        }
      });
});