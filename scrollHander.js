let lastId;

const nav = $('#main-nav');

const navHeight = nav.outerHeight() + 15;
// All list items
const menuItems = nav.find('a');
// Anchors corresponding to menu items
const scrollItems = menuItems.map(function () {
  const item = $($(this).attr('href'));
  if (item.length) {
    return item;
  }
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  const fromTop = $(this).scrollTop() + navHeight;

  // Get id of current scroll item
  let cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  const id = cur && cur.length ? cur[0].id : '';

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems.removeClass('nav-item-active');
    $(`#main-nav-item-${id}`).addClass('nav-item-active');
  }
});

// Scroll animation
menuItems.click(function (e) {
  const href = $(this).attr('href'),
    offsetTop = href === '#' ? 0 : $(href).offset().top - navHeight + 1;
  $('html, body').stop().animate(
    {
      scrollTop: offsetTop,
    },
    300
  );
  e.preventDefault();
});
