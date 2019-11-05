function init(){
  $(".next").click(nextSlide);
  $(".prev").click(prevSlide);
};

$(document).ready(init);

function prevSlide(){
  console.log("PrevSlider");
  var activeitems = $(".containerGriglia");

  if ($(".first").hasClass("active")) {
    $(".first").removeClass("active");
    $(".last").addClass("active");
  } else {
  var activeitems = $(".containerGriglia.active");
   activeitems.removeClass("active").prev().addClass("active");
    console.log("vai");
  }

};

function nextSlide(){
  console.log("NextSlider");

  var activeitems = $(".containerApp .containerGriglia");
  if ($(".last").hasClass("active")) {
    $(".last").removeClass("active");
    $(".first").addClass("active");
  } else {
  var activeitems = $(".containerGriglia.active");
   activeitems.removeClass("active").next().addClass("active");
   console.log("vai");
  }

};
