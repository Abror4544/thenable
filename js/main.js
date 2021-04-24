$(function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  if ($(window).width() < 767) {
    $('.menu_li').removeClass('subtoggle');
    $('.submenu').removeClass('subtoggle');
    $('.parent').addClass('mobParent');
  };
  $('.menu_btn_bars').click( () => {
    $('.menu_btn_bars').hide();
    $('.menu_btn_bars').css('transform', 'rotate(180deg)');
    $('.menu_btn_close').show();
    $('.menu_ul').css('transform', 'translateY(-9%)');
    $('body').css('overflow', 'hidden');
  });
  $('.menu_btn_close').click( () => {
    $('.menu_btn_close').hide();
    $('.menu_btn_bars').show();
    $('.menu_ul').css('transform', 'translateY(-110%)');
    $('body').css('overflow', 'auto');
  });

  $(window).scroll(function() {
    let offset = $(window).scrollTop();
    $('.menu_li a, .headerPhoneBlock p, .menu').toggleClass('setdown', offset > 0);
    if ($(this).scrollTop() > 0) {
      $('.whitephone').css('display', 'none');
      $('.whitelogo').css('display', 'none');
      $('.bluephone').css('display', 'block');
      $('.bluelogo').css('display', 'block');
    } else {
      $('.whitephone').css('display', 'block');
      $('.whitelogo').css('display', 'block');
      $('.bluephone').css('display', 'none');
      $('.bluelogo').css('display', 'none');
    }
  });
  $('.formClose').click(() => {
    $('.formWrapper').hide();
    $('body').css('overflow', 'auto');
  })
  $('.btnLink').click(() =>{
    $('.formWrapper').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  })
  document.querySelector('.slide-1').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
  });
  document.querySelector('.slide-2').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(1, 0);
  });
  document.querySelector('.slide-3').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(2, 0);
  });
  document.querySelector('.slide-4').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(3, 0);
  });
  document.querySelector('.slide-5').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(4, 0);
  });

  let link = $('.menu_ul li a');

  link.on('click', function (e) {
    e.preventDefault();
    let selector = $(this).addClass('active').attr('href');
    let target = $(selector);
    $('html, body').animate({ scrollTop: target.offset().top - 120 }, 1000);
  })
})
