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
/*   var menu = $('.gnb > li');
  var wrap = $('.gnbWrap');
  var menuHeight =  menu.children('.gnb').height();
  var pageURL = location.href;
  var activeMenu;

  menu.on({
    mouseover: function(i){
      var tg = $(this);
      menu.removeClass('on');
      tg.addClass('on');
      var th = menuHeight + tg.find('>.sGnbArea').eq(i).height();
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
    var sub = tg.find('>.sGnbArea > ul > li'); // li들 37개
    console.log(sub);   
    var menuURL = tg.children().attr('href');  //#
    var active = pageURL.indexOf(menuURL);  //32
    console.log(active); //32
    if(active > -1){
      activeMenu = tg;
    }
    sub.each(function(j){
      var tg = $(this);
      var subURL = tg.children().attr('href'); //#
      active = pageURL.indexOf(subURL); //32
      console.log(active);
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
 */
/*   var $menu = $('.gnb');

  $menu.children('li').each(function(){
    var $this = $(this);
    var $span = $this.children('span');
    $span.data('width',$span.width());

    $this.bind('mouseenter',function(){
      $menu.find('.sGnbArea').stop(true,ture).hide();
      $span.stop().animate({'width':'510px'},300,function(){
        $this.find('.sGnbArea').slideDown(300);
      });
    }).bind('mouseleave',function(){
      $this.find('.sGnbArea').stop(true,true).hide();
      $span.stop().animate({'width':$span.data('width')+'px'},300);
    });
  }); */

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
