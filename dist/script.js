var s = skrollr.init();

$(window).scroll(function(evt){
  if ($(window).scrollTop() >0){
    $(".navbar").removeClass("navbar-top");
  }
  else{
    $(".navbar").addClass("navbar-top");
  }
});

// $(".endbotton").click(function(){
//   $(".enter").css("opacity","1");

// });

// $(".p2").click(function(){
//   $(".enter").css("opacity","0");
// });