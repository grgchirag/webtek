
    $(document).ready(function() {
        var previousScroll = $(window).scrollTop();
  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > 50) {
      // Scrolling down and beyond 100px
      $('#tophead').fadeOut(100);
    } else {
      // Scrolling up or within the first 100px
      $('#tophead').fadeIn(100);
    }
    previousScroll = currentScroll;
  });

  console.log(previousScroll)

});