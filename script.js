$( document ).ready(function() {
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    autoPlay: 3000
  });

  window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });

  $(function() {
    $("a[href^='#']").not("a[href='#']").click(function() {
        $("#"+$(this).attr("href").slice(1)+"").focus();
    });
  });
});