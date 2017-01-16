$( document ).ready(function() {


  /*$('.landing').mousemove(function(e){
    var x = -(e.pageX + this.offsetLeft) / 6;
    //var y = -(e.pageY + this.offsetTop) / 20;
    $(this).css('background-position', x + 'px' );
  });*/


  // Get started!
  //Landing Page
  $(".my_arrow").hide(0).delay(1200).fadeIn(800);
  setTimeout(function(){
    $(".land_overlay").addClass("fadeLoad");
  }, 200);

  $('.proj_des').bind('inview', function(event, isInView) {
  if (isInView) {
    // element is now visible in the viewport
    //$(".btnWork").css({"background-color" : "white"});
    //$(".btnWork").css({"color" : "#FFBC00"});
    //$('.btnWork').trigger('mouseenter');
    //$('.btnWork').addClass('active');
  } else {
    // element has gone out of viewport
    //$(".btnWork").css({"background-color" : "#FFBC00"});
    //$(".btnWork").css({"color" : "white"});
    //$('.btnWork').trigger('mouseout');
    //$('.btnWork').removeClass('active');
  }
  });

  $('.one').bind('inview', function(event, isInView) {
    if (isInView) {
      //alert('Hi');
      $('.ione').addClass('iFade');
      $('.ione').addClass('animated slideInRight');
    } else {

    }
  });

  $('.two').bind('inview', function(event, isInView) {
    if (isInView) {
      //alert('Hi');
      $('.itwo').addClass('iFade');
      $('.itwo').addClass('animated slideInLeft');
    } else {

    }
  });

  $('.three').bind('inview', function(event, isInView) {
    if (isInView) {
      //alert('Hi');
      $('.ithree').addClass('iFade');
      $('.ithree').addClass('animated slideInRight');
    } else {

    }
  });

  $('.four').bind('inview', function(event, isInView) {
    if (isInView) {
      //alert('Hi');
      $('.ifour').addClass('iFade');
      $('.ifour').addClass('animated slideInLeft');
    } else {

    }
  });

  $('.five').bind('inview', function(event, isInView) {
    if (isInView) {
      //alert('Hi');
      $('.ifive').addClass('iFade');
      $('.ifive').addClass('animated slideInRight');
    } else {

    }
  });


var $window = $(window),
    $mainMenuBar = $('.navigation_bar'),
    $mainMenuBarAnchor = $('.Anchor');

$window.scroll(function() {
  var window_top = $window.scrollTop();
  var div_top = $mainMenuBarAnchor.offset().top;
  if (window_top > div_top) {
      $mainMenuBar.addClass('stick');
      $mainMenuBarAnchor.height($mainMenuBar.height());
  }
  else {
      $mainMenuBar.removeClass('stick');
      $mainMenuBarAnchor.height(0);
  }

    //console.log(window_top);
    $('.img').css({
        //'transform' : 'translate(0px, -'+ window_top/2 +'%)'
      });

});

$(".dp_focus").click(function(){
        $(this).toggleClass("zoom");
    });

$(".enter").click(function() {
    $('html,body').animate({
        scrollTop: $(".work_bgContain").offset().top + (-64)
      },800, 'swing');
});

$(".nav_logo").click(function() {
    $('html,body').animate({
        scrollTop: $(".landing").offset().top
      },300, 'swing');
});

$(".vnav_logo").click(function() {
    location.href='/';
});

$(".btnWork").click(function() {
    $('html,body').animate({
        scrollTop: $("#work_container").offset().top  + (-64)
      },800, 'swing');
});

$(".vbtnWork").click(function() {
    location.href='/#work_container';
});

$(".btnSocial").click(function() {
    $('html,body').animate({
        scrollTop: $("#social_container").offset().top + (-64)
      },800, 'swing');
});

$(".vbtnSocial").click(function() {
    location.href='/#social_container';
});

$(".btnContact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact_container").offset().top + (-64)
      },800, 'swing');
});

$(".vbtnContact").click(function() {
    location.href='/#contact_container';
});

});
