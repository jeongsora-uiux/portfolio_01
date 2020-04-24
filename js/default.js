$(function(){
  
  //start
  $(".slide-bnr").hide();
  var sw = false;
  var rollingId;
  $(".down").click(function(){
    if(sw==false){
      $(".slide-bnr").slideToggle(300,rollingStart);
      $(".down").val('▲');
      sw=true;
      clearInterval(rollingId);
      rollingId = setInterval(function(){ rollingStart();},5000);

    }else{
      $(".slide-bnr").slideToggle(300);
      $(".down").val('▼');
      sw=false;
    }
  });

  $(".down").trigger("click");
  

  function rollingStart(){
    var banner = $(".slide-bnr ul").outerWidth();
    var bannerWidth = $(".slide-bnr ul li").eq(0).outerWidth();
    var bannerHeight = $(".slide-bnr ul li").outerHeight();
    var length = $(".slide-bnr ul li").length;

    $(".slide-bnr ul").css("width",bannerWidth + "px");
    $(".slide-bnr ul li").css("height",bannerHeight + "px");

    $(".slide-bnr ul").animate({top: -bannerHeight + "px"},1500,function(){
      $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
      $(this).find("li:first").remove();
      $(this).css("top",0);
    });
  }
  // ----------------------------------------------------------------

  //슬라이드 2depth
  $('.gnb_01').on({
    mouseenter:function(){
      $(this).find('div').slideDown();
      $(this).addClass('menu__item--current');
      $(this).find('a').addClass('menu__item--current');
    },
    mouseleave:function(){
      $(this).find('div').slideUp();
      $('.gnb_01').removeClass('menu__item--current');
      $('.gnb_01').find('a').removeClass('menu__item--current');
    },
    click:function(){
      $('.gnb_01').removeClass('menu__item--current');
      $('.gnb_01').find('a').removeClass('menu__item--current');

      $(this).addClass('menu__item--current');
      $(this).find('a').addClass('menu__item--current');
    }
  })
  //////////////////////---------------------

  //무한 텍스트 전광판
  var OffsetWidth = $(".marquee div span").eq(0).width();

  var cnt = 0;
  var timer = setInterval(function(){
    if(cnt != OffsetWidth){
      cnt++;
      //clearInterval(timer);
    }else{
      cnt=0;
    }
    $('.marquee div').css({left:-cnt});
  },0);


  // -----------------------------------------------------

  //호텔찾기 슬라이드
  var time; 
  var $carouselLi;
  var carouselCount; 
  var currentIndex; 
  var caInterval;
  var imgW;    
  $(document).ready(function(){
      carouselInit(2500, 5000);
  });
  function carouselInit( height ){
      $carousel = $(".slide_box");
      $carouselLi = $(".slide");
      carouselCount = $carouselLi.length; 
      currentIndex = 0; 
      imgW=$carouselLi.width();
      carousel();
  }

  function carousel(){
      caInterval = setInterval(function(){
          var left = "-" + imgW;  //384  
          $carousel.animate( {left: left * currentIndex},1000, function(){
            $('.slide').first().appendTo("<li>" + $('.slide').find("li:first").html() + "</li>");
            $('.slide').find("li:first").remove();
            $('.slide').css("left","0px");
            currentIndex++;
          });
      }, 1000);
  };

 


  





  //end
});
