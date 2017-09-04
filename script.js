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
            scrollTop: $(hash).offset().top - 115
          }, 700, function(){
            window.location.hash = hash;
          });
        }
      });

  $('#subscribe').click(function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test($('#email').val())){
      alert('Thank you for subscribing!');
    }
   })
});