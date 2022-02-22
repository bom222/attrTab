$(function () {
  // 로고 클릭시 최상단으로!!
  $(".logo").on("click", function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 400);
  });
  // 하단 버튼 클릭시 최상단으로!!
  $(".btn_top").on("click", function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 400);
  });
  // 하단 버튼이 스크롤 500픽셀 도달시 나타남!!
  $(window).scroll(function () {
    if($(this).scrollTop() > 500){/* this=window(=이벤트가 일어난 당사자를 의미) */
      $(".btn_top").fadeIn();
     } else {
      $(".btn_top").fadeOut();
     }
  });

  // 메뉴 클릭시 애니메이션으로 위치 이동!!
  var menu = $(".menu>ul>li");
  var wrap = $("#center>div");
  menu.click(function(){
    var tg = $(this); // $(this) : 이벤트가 일어난 요소 선택
    var i = tg.index(); // .index() : 순서값 반환
    var section = wrap.eq(i); // eq() : 지정한 변수만 선택
    var top = section.offset().top; // .offset() : 전체 문서를 기준으롯 ㅓㄴ택한 요소의 가로세로 떨어진 위치의 좌표값 변경 시 사용(top,left)
    $("html,body").stop().animate({scrollTop:top});
  });
}); //function end
