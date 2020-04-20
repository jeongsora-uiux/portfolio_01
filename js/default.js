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

  menu.on({
    mouseover: function(){
      var tg = $(this);
      menu.removeClass('on');
      tg.addClass('on');
      var th = menuHeight + tg.find('>.sGnbArea').height();
      wrap.stop().animate({
        height: th
      });
    },
    mouseout: function(){
      var tg = $(this);
      menu.removeClass('on');
      wrap.stop().animate({
        height: menuHeight
      });
      onActive(); 
    }
  });

  menu.each(function(i){
    var tg = $(this);
    var sub = tg.find('>.sGnbArea > ul > li');
    var menuURL = tg.children('>.sGnbArea > ul').attr('href');
    var active = pageURL.indexOf(menuURL);

    if(active > -1){
      activeMenu = tg;
    }
    sub.each(function(j){
      var tg = $(this);
      var subURL = tg.children('>.sGnbArea > ul > li').attr('href');
      active = pageURL.indexOf(subURL);
      if(active > -1){
        activeMenu = tg;
      }
    });
    sub.on({
      mouseover: function(){
        var tg = $(this);
        sub.removeClass('on');
        tg.addClass('on');
      },
      mouseout: function(){
        var tg = $(this);
        tg.removeClass('on');
        onActive();
      }
    });
  });
  onActive();
  function onActive(){
    if(activeMenu){
      activeMenu.trigger('mouseover');
    }
  }










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
