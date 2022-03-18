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

// top_left top_rightのフェードイン
window.onload = function() {
  $('.top_left').addClass('left_fadein');
  $('.top_right').addClass('right_fadein');
  $('.taiki').addClass('taiki_fadein');
  $('.tominari').addClass('tominari_fadein');
}
// main_logoのフェードイン
$(function(){
  $('.main_logo').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move">$&</span>'));
  });
   setTimeout(function(){
      $(".main_logo").addClass("active");
  },2000);
});

// profile_item フェードイン
$(function(){
  $(window).on('scroll', function() {
      if($(this).scrollTop() + $(window).height() > $('.profile_item').offset().top){
        let i = 0;
        setInterval(function() {
          $('.profile_item').eq(i).addClass('item_active');
          i++;
          if(i>=$('.profile_item').length) i=0;
        },400)
      }
    });
});

// profile_space フェードイン
$(function(){
  $(window).on('scroll', function() {
      if($(this).scrollTop() + $(window).height() > $('#profile_space').offset().top){
        $('.fa-comment-dots').addClass('comment_active');
        $('.fa-user-tie').addClass('user_active');
      }
    });
});
// work_space フェードイン
$(function(){
  $(window).on('scroll', function() {
      if($(this).scrollTop() + $(window).height() > $('#work').offset().top){
        $('.fa-laptop-code').addClass('code_active');
        $('.fa-file').addClass('file_active');
      }
    });
});



