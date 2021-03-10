const delay = 500;
const topOffset = 170;

$('#nav-work').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('#header-work').offset().top - topOffset,
    },
    delay
  );
});

$('#nav-photos').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('#header-photos').offset().top - topOffset,
    },
    delay
  );
});
