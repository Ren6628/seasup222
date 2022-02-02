$(function () {
  $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('slide-in');
    $('body').toggleClass('noscroll'); // 追記
  })
});

/*フェードイン */
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.scrollanime').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight + 60) {
              $(this).addClass("fadeInDown");
          }
      });
  });
});
$(function() {
  // 一旦hide()で隠してフェードインさせる
  $('.access').hide().fadeIn(2000);
});
