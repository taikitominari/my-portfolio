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


// .logoのフェードイン
let container = $(".logo");
let speed = 300;
let content = container.html();
let text = $.trim(content);
let newHtml = "";

text.split("").forEach(function(v) {
 newHtml += '<span>' + v + '</span>';
});

container.html(newHtml);

$(function(){
  $(window).on('scroll', function() {
      if($(this).scrollTop() + $(window).height() > $('.profile_item').offset().top){
        let txtNum = 0;
        container.css({opacity: 1});
        setInterval(function() {
        container.find('span').eq(txtNum).css({opacity: 1});
        txtNum++
        }, speed);
      }
    });
});


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






