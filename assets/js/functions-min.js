$(document).ready(function(){$(".my_arrow").hide(0).delay(1200).fadeIn(800),setTimeout(function(){$(".land_overlay").addClass("fadeLoad")},200),$(".proj_des").bind("inview",function(n,i){}),$(".one").bind("inview",function(n,i){i&&($(".ione").addClass("iFade"),$(".ione").addClass("animated slideInRight"))}),$(".two").bind("inview",function(n,i){i&&($(".itwo").addClass("iFade"),$(".itwo").addClass("animated slideInLeft"))}),$(".three").bind("inview",function(n,i){i&&($(".ithree").addClass("iFade"),$(".ithree").addClass("animated slideInRight"))}),$(".four").bind("inview",function(n,i){i&&($(".ifour").addClass("iFade"),$(".ifour").addClass("animated slideInLeft"))}),$(".five").bind("inview",function(n,i){i&&($(".ifive").addClass("iFade"),$(".ifive").addClass("animated slideInRight"))})});var $window=$(window),$mainMenuBar=$(".navigation_bar"),$mainMenuBarAnchor=$(".Anchor");$window.scroll(function(){var n=$window.scrollTop(),i=$mainMenuBarAnchor.offset().top;n>i?($mainMenuBar.addClass("stick"),$mainMenuBarAnchor.height($mainMenuBar.height())):($mainMenuBar.removeClass("stick"),$mainMenuBarAnchor.height(0)),$(".img").css({})}),$(".dp_focus").click(function(){$(this).toggleClass("zoom")}),$(".enter").click(function(){$("html,body").animate({scrollTop:$(".work_bgContain").offset().top+-64},800,"swing")}),$(".nav_logo").click(function(){$("html,body").animate({scrollTop:$(".landing").offset().top},300,"swing")}),$(".vnav_logo").click(function(){location.href="/"}),$(".btnWork").click(function(){$("html,body").animate({scrollTop:$("#work_container").offset().top+-64},800,"swing")}),$(".vbtnWork").click(function(){location.href="/#work_container"}),$(".btnSocial").click(function(){$("html,body").animate({scrollTop:$("#social_container").offset().top+-64},800,"swing")}),$(".vbtnSocial").click(function(){location.href="/#social_container"}),$(".btnContact").click(function(){$("html,body").animate({scrollTop:$("#contact_container").offset().top+-64},800,"swing")}),$(".vbtnContact").click(function(){location.href="/#contact_container"});