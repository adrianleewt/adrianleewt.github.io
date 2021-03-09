// Code yoinked from: https://codepen.io/vaninoo/pen/BmyYQd
$('document').ready(function () {
  console.log('CUBE CODE FROM: https://codepen.io/vaninoo/pen/BmyYQd');
  console.log('Go check it out :)');
  var lastScrollLeft = 0;

  $(window).scroll(function trucenscroll(event) {
    var sl = $(this).scrollTop();
    var st = $(this).scrollLeft();

    if (sl > lastScrollLeft) {
      var srotatey = 'rotateY(' + sl / 3 + 'deg)';
      var srotatex = 'rotateX(' + sl / 2 + 'deg)';
      var size = 100 + sl + 'vw';

      $('#cubo').css({
        '-moz-transform': srotatey + srotatex,
        '-webkit-transform': srotatey + srotatex,
      });
      $('#portaCubo').css({ perspective: size });
    } else if (sl == lastScrollLeft) {
      //do nothing
      //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
    } else {
      var srotatey = 'rotateY(' + sl / 3 + 'deg)';
      var srotatex = 'rotateX(' + sl / 2 + 'deg)';
      var size = 100 + sl + 'vw';
      $('#cubo').css({
        '-moz-transform': srotatey + srotatex,
        '-webkit-transform': srotatey + srotatex,
      });
      $('#portaCubo').css({ perspective: size });
    }
    lastScrollLeft = sl;
  });
});
