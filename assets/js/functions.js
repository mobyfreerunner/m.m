//-----------Nav Bar Stuff------------//

$(window).scroll(function(){
  //console.log(wScroll);
  var wScroll = $(this).scrollTop();
  var $mainMenuBar = $('.navigation_bar');
  var windowSize = $(window).height() + (-64);
  var off =  20;
  if(wScroll > (windowSize-off)){
    $mainMenuBar.addClass('nav_show');
  } else {
    $mainMenuBar.removeClass('nav_show');
  }
});

$( document ).ready(function() {
//-----------These are all button stuff------------//

  $(".dp_focus").click(function(){
          $(this).toggleClass("zoom");
      });

  $(".enter_label").click(function() {
      $('html,body').animate({
          scrollTop: $("#work_container").offset().top + (-71)
        },800, 'swing');
  });

  $(".card_logo").click(function() {
      $('html,body').animate({
          scrollTop: $("#work_container").offset().top + (-71)
        },800, 'swing');
  });

  $(".nav_logo").click(function() {
      $('html,body').animate({
          scrollTop: $(".landing").offset().top
        },1500, 'swing');
  });

  $(".vnav_logo").click(function() {
      location.href='/';
  });

  $(".btnWork").click(function() {
      $('html,body').animate({
          scrollTop: $("#work_container").offset().top  + (-72)
        },800, 'swing');
  });

  $(".vbtnWork").click(function() {
      location.href='/#work_container';
  });

  $(".btnSocial").click(function() {
      $('html,body').animate({
          scrollTop: $("#social_container").offset().top + (-72)
        },800, 'swing');
  });

  $(".vbtnSocial").click(function() {
      location.href='/#social_container';
  });

  $(".btnContact").click(function() {
      $('html,body').animate({
          scrollTop: $("#contact_container").offset().top + (-72)
        },800, 'swing');
  });

  $(".vbtnContact").click(function() {
      location.href='/#contact_container';
  });

  // $(".tldr_link").click(function() {
  //     $("#end").ScrollTo( {
  //       duration: 2000
  //     });
  // });

  //-----------Contact Stuff------------//

  $(".card_face").click(function() {
      window.open("https://www.facebook.com/mubarakmarafaixd");
  });

  $(".card_mail").click(function() {
      window.location.href = "mailto:mubarakmarafa@me.com";
  });

  $(".card_in").click(function() {
      window.open("https://hk.linkedin.com/in/mubarakmarafa");
  });

  $(".card_phone").click(function() {
      window.location.href = "tel:+85260718550";
  });



  // $("p").click(function(){
  //   $(this).addClass(".filterActive");
  // });



  // document.addEventListener('mousemove', function (e) {
  //     let w = getComputedStyle(document.documentElement).width.slice(0, -2),
  //         h = getComputedStyle(document.documentElement).height.slice(0, -2),
  //         rx = (h / 2 - e.pageY) / 50,
  //         ry = (w / 2 - e.pageX) / 100,
  //         rotateCard = document.getElementsByClassName("centerWrap");
  //
  //     rotateCard.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + -ry + 'deg)';
  //
  //     //$('.centerWrap').css('transform: rotateX(' + rx + 'deg) rotateY(' + -ry + 'deg)');
  // });

});

jQuery.fn.extend({
    toggleText: function (a, b){
        var isClicked = false;
        var that = this;
        var x = document.getElementsByClassName('moreWork');
        this.click(function (){
            if (isClicked) {
            	that.text(a); isClicked = false;
              $('.moreWork').css('display', 'none');
            } else {
            	that.text(b); isClicked = true;
              $('.moreWork').css('display', 'block');
            }
        });
        return this;
    }
});

$('.allWork').toggleText("More", "Less");
