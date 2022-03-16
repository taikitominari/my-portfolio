'use strict';
// なめらかにスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


$(function(){
  $(window).on('scroll', function() {
      if($(this).scrollTop() + $(window).height() > $('.profile_item').offset().top){
        $('.profile_item').addClass('active');
      }
  });
});
$(function(){
  $(window).on('scroll', function() {
      if($(this).scrollTop() + $(window).height() > $('.profile_item').offset().top){
        $('.profile_logo').addClass('show');
      }
  });
});