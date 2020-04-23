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
      console.log($(".slide-bnr").find("ul").eq(0).outerWidth());
      // console.log($(".slide-bnr").find("ul").eq(0).outerHeight());
      
      console.log(rollingStart);
      clearInterval(rollingId);
      rollingId = setInterval(function(){ rollingStart();},5000);

    }else{
      $(".slide-bnr").slideToggle(300);
      $(".down").val('▼');
      // $(".slide-bnr li").animate({top:70},1000);
      sw=false;
    }
  });

  $(".down").trigger("click");
  

  function rollingStart(){
    var banner = $(".slide-bnr ul").outerWidth();
    var bannerWidth = $(".slide-bnr ul li").eq(0).outerWidth();
    var bannerHeight = $(".slide-bnr ul li").outerHeight();
    var length = $(".slide-bnr ul li").length;
    // console.log($(".slide-bnr ul li").eq(0));
    // console.log(bannerHeight);
    console.log(length);

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
  var menu = $('.gnb > li');
  var wrap = $('.gnbWrap');
  var menuHeight =  menu.children('.gnb').height();
  var pageURL = location.href;
  var activeMenu;


  $(document).ready(function(){
    var barMenu = new BarMenu("gnbWrap");
    barMenu.setSelectMenuItemAt(1, false);

    // select 이벤트 리스너 등록
    barMenu.$barMenu.on("select",function(e){
      var oldIndex = -1;
      if(e.$oldItem)
        oldIndex = e.$oldItem.index();
    });
    barMenu.setSelectMenuItemAt(1, false);
  });
 
  //////////////////////---------------------

  
  $('.gnb_01').on({
    mouseenter:function(){
      $(this).find('div').slideDown();
    },
    mouseleave:function(){
      $(this).find('div').slideUp();
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

  console.log('a');
  console.log(OffsetWidth);  //3175.92

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
  














  





  //end
});
