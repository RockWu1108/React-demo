//
// custom-javascript
//

$(document).ready(function () {
  setTimeout(function () {
    gotop();
}, 500);
});


//gotop
function gotop() {
  $(".topcontrol").click(function () {
      $("html,body").animate({
          scrollTop: 0
      }, 500);
  });
  $(window).scroll(function () {
      console.log($(this).scrollTop());
      if ($(this).scrollTop() > 150) {
          $('.topcontrol').addClass("fade");
      } else {
          $('.topcontrol').removeClass("fade");
      }
  });
}