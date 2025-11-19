function Dropdown_1() {
    $('.header > .icon-box > .toggle-btn').click(function () {
        $('.Dropdown-1').toggleClass('active');
        if (window.innerWidth < 1024) {
          // 1024px 미만일 때만 모바일 드롭다운 열기
          $('.Dropdown_mb').toggleClass('active-2');
          $('.header').toggleClass('none');
        }
        $(this).toggleClass('active');
        $('.header').toggleClass('active');

        $('.shopping').removeClass('shop');
        
        if($('.header').hasClass('active')) {
          $('.header').removeClass('blur');
        };
    });
}

Dropdown_1 ();

function Shopping_1() {
    $('.shopping').click(function () {
        $('.shopping').toggleClass('shop');
    });
}

Shopping_1 ();

function Shopping_mb() {
  $('.shopping-mb').click(function () {
      $('.shopping-mb').toggleClass('shop_mb');
  });
}

Shopping_mb ();

function Mb_search_menu_ct() {
  $('.search-menu-3 > ul > li').click(function() {
    let $this = $(this);
    
    $this.siblings('.hover').removeClass('hover');
    
    if ( $this.hasClass('hover') ) {
      $this.removeClass('hover');
    }
    else {
      $this.addClass('hover');
    }
  });
  
  $('.search-menu-3 > ul > li > ul').click(function() {
    return false;
  });
}

Mb_search_menu_ct();

function Mb_tap_menu() {
  $('.search-menu > ul > li').click(function() {
    // 클릭당한 녀석
    let $this = $(this);
    // 클릭당한 녀석의 형제번호(0 부터 시작)
    let thisIndex = $this.index();
    
    // 클릭당한 녀석의 형제 중에서 활성화된 녀석 제거
    $this.siblings('.active').removeClass('active');
    // 클릭당한 녀석이 active를 갖는다.
    $this.addClass('active');
    
    let $box1 = $this.closest('.search-menu');
    let $box1Main = $box1.find('.tap');
    
    $box1Main.find(' > div').removeClass('active');
    $box1Main.find(' > div').eq(thisIndex).addClass('active');
  });
}

Mb_tap_menu();


function Search_1() {
    $('.header > .icon-box > .search > img').click(function () {
      $('.header > .icon-box > .search > div').addClass('search-show');
      $('body').addClass('no-scroll');
      $('.header').removeClass('blur');
    });

    $('.header > .icon-box > .search .search-popup > .search-logo > div').click(function () {
      $('.header > .icon-box > .search > div').removeClass('search-show');
      $('body').removeClass('no-scroll');
    });

    $('.header > .icon-box > .search > div').click(function () {
      $('.header > .icon-box > .search > div').removeClass('search-show');
      $('body').removeClass('no-scroll');
    });
}

Search_1 ();
  




$('.header > .menu-right > .menu-box-1 > .menu-1 > li').on({
  mouseenter: function () {
    $('.header').removeClass('blur');
  },
  mouseleave: function () {
    if ($(window).scrollTop() > 20) {
      $('.header').addClass('blur');
    } else {
      $('.header').removeClass('blur');
    }
  }
});

// 2. 블러 효과 처리만 담당하는 함수
function Blur() {
  if ($(window).scrollTop() > 20) {
    $('.header').addClass('blur');
  }  else {
    $('.header').removeClass('blur');
  } 
}

// 3. 스크롤 시 블러 적용
$(window).on('scroll', Blur);

// 4. 페이지 로드시 한 번 실행
Blur();




// 탑 버튼
$(function() {
  // 윈도우에서 스크롤 이벤트 발생 시 실행
  $(window).on('scroll', function() {
    function Topbtn() {
      if ($(window).scrollTop() > 100) {
        $('.top-btn').addClass('show');
      } else {
        $('.top-btn').removeClass('show');
      }
    }

    function Plusbtn() {
      if ($(window).scrollTop() > 100) {
        $('.plus-btn').addClass('show');
        $('.plus-bg').addClass('show');
      } else {
        $('.plus-btn').removeClass('show');
        $('.plus-bg').removeClass('show');
      }
    }

    Plusbtn();
    
    Topbtn();
  });

  // 버튼 클릭 시 맨 위로 부드럽게 스크롤
  $('.top-btn').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 600);
  });
});

// -------------------------플러스 버튼-----------------
function Plus_1() {
  $('.plus-btn').click(function () {
      $('.plus-bg').toggleClass('open');
      $('.plus-btn').toggleClass('open');
      $('body').toggleClass('no-scroll');
  });
}

Plus_1();


// ----------섹션 1 페이드 슬라이드---------
  $('.slider-1').slick({
    draggable: true,
    arrows: false,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  });
  
  // AOS 초기화
  AOS.init();

  setTimeout(() => {
    $('.slider-1 .slick-current .fade-up').addClass('active');
  }, 100);
  
  // 슬라이드가 바뀔 때 애니메이션 클래스 재부여
  $('.slider-1').on('afterChange', function (event, slick, currentSlide) {
    $('.fade-up').removeClass('active'); // 전체 제거
    $(slick.$slides[currentSlide]).find('.fade-up').addClass('active'); // 현재 슬라이드만 적용
  });
  
// -----------------스와이퍼-------------
function sec_2_swiper() {
  var swiper = new Swiper(".swiper-2", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    slidesPerView: 2,

    breakpoints: {
      576: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      }
    }
  });
}

sec_2_swiper();

function sec_3_swiper() {
  var swiper = new Swiper(".swiper-3", {
    slidesPerView: 1,
    freeMode: true,
    spaceBetween: 5,
  });
}

sec_3_swiper ();

function sec_4_swiper() {
  var swiper = new Swiper(".swiper-4", {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        freeMode: false,
      }
    }
  });
}

sec_4_swiper();

function sec_5_swiper() {
  var swiper = new Swiper(".swiper-5", {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });
}

sec_5_swiper();

function sec_5_swiper_mb() {
  var swiper = new Swiper(".swiper-5-mb", {
    slidesPerView: 1,
    spaceBetween: 10,
  });
}

sec_5_swiper_mb();

function sec_6_swiper() {
  var swiper = new Swiper(".swiper-6", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });
}

sec_6_swiper ();

function sec_6_mb_swiper() {
  var swiper = new Swiper(".swiper-6-mb", {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        freeMode: false,
      }
    }
  });
}

sec_6_mb_swiper();

function sec_7_swiper() {
  var swiper = new Swiper(".swiper-7", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,   // 5초마다 넘어감
      disableOnInteraction: false // 사용자가 건드려도 autoplay 계속됨
    },
    speed: 1000,
  });
}

sec_7_swiper ();

// 질문 -> 루프라고 치기에는 좀 애매함 다른 방법으로 해야할거 같음
function sec_8_swiper() {
  var swiper = new Swiper(".swiper-8", {
    loop: true,
    loopedSlides: 2,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
    nextEl: ".section-8 .swiper-button-next",
    prevEl: ".section-8 .swiper-button-prev",
  },
  });
}

sec_8_swiper ();

function sec_8_swiper_mb() {
  var swiper = new Swiper(".swiper-8-mb", {
    slidesPerView: 1,
    spaceBetween: 5,
  });
}

sec_8_swiper_mb ();
  // -----------------섹션 4 썸네일 바꾸기-------------

  function Thumbnail_4() {
    $('.section-4 > .img-box-h-4 > .h-4-right > ul:last-child > li > div > nav > ul > li > div').click(function () {
      const $clickedDiv = $(this);
      const newSrc = $clickedDiv.find('img').attr('src');
      const $product = $clickedDiv.closest('.thumbnail');
      const $bigImg = $product.find('> a > img').first();
      $bigImg.attr('src', newSrc);

      $product.addClass('selected');
      $clickedDiv.parent().siblings().removeClass('selected');
      $clickedDiv.parent().addClass('selected');
    });
  }

  Thumbnail_4 ();

  function Thumbnail_4_mb() {
    $('.section-4-mb > .swiper-4 .swiper-slide > div > .soon-box > ul > li > div').click(function () {
      const $clickedDiv = $(this);
      const newSrc = $clickedDiv.find('img').attr('src');
      const $product = $clickedDiv.closest('.swiper-slide > div');
      const $bigImg = $product.find('> .img-4 > img').first();
      $bigImg.attr('src', newSrc);

      $product.addClass('selected');
      $clickedDiv.parent().siblings().removeClass('selected');
      $clickedDiv.parent().addClass('selected');
    });
  }
  
  Thumbnail_4_mb();

  function Thumbnail_6_mb() {
    $('.section-6-mb > .swiper-6-mb .swiper-slide > div > .new-box > ul > li > div').click(function () {
      const $clickedDiv = $(this);
      const newSrc = $clickedDiv.find('img').attr('src');
      const $product = $clickedDiv.closest('.swiper-slide > div');
      const $bigImg = $product.find('> .img-6 > img').first();
      $bigImg.attr('src', newSrc);

      $product.addClass('selected');
      $clickedDiv.parent().siblings().removeClass('selected');
      $clickedDiv.parent().addClass('selected');
    });
  }
  
  Thumbnail_6_mb();
  // -----------------섹션 6 썸네일 바꾸기-------------

  //  이건 방법 질문 -> 그러면 바뀔 썸네일의 이미지를 after로 넣고 안보이게 했다가 주소를
  //  불러와서 바꿀때 그 이미지의 주소를 다시 불러와서 넣는 방식이면 되는건가?

  // 지금 쓰는 방식은 클릭한 이미지의 주소를 불러오는건데 그거 자체를 클릭한 이미지 말고
  // 다른 이미지의 주소를 불러오는 방식이면 되는건가?

  function Thumbnail_6() {
    $('.section-6 > .swiper li > div > nav > ul > li > div').click(function () {
      const $clickedDiv = $(this);
      const newSrc = $clickedDiv.find('img').attr('src');
      const $product = $clickedDiv.closest('.select');
      const $bigImg = $product.find('> a > img').first();
      $bigImg.attr('src', newSrc);

      $product.addClass('selected');
      $clickedDiv.parent().siblings().removeClass('selected');
      $clickedDiv.parent().addClass('selected');
    });
  }

  Thumbnail_6();




  function F_Up() {
    $('footer > .footer-box > .f-footer > div:last-child > ul > li > .family').click(function () {
      $('footer > .footer-box > .f-footer > div:last-child > ul > .family').toggleClass('up')
      $('footer > .footer-box > .f-footer > div:last-child > ul > li > .family > ul').toggleClass('up')
    });
    
    $('footer > .footer-box > .f-footer > div:last-child > ul > li > .site').click(function () {
      $('footer > .footer-box > .f-footer > div:last-child > ul > .site').toggleClass('up')
      $('footer > .footer-box > .f-footer > div:last-child > ul > li > .site > ul').toggleClass('up')
    });
  }

  F_Up() ;