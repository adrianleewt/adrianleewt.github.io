/**
 * The script that setups the side sliding banner using JQuery.
 */
const items = [
  'a long drive with friends',
  'a piping hot wok',
  'an early morning swim',
  'a late night coffee',
  'loud music in the shower',
  'a medium rare steak',
  'MF DOOM in the headphones',
  'a smothered checkmate',
  'finally solving a chess puzzle',
  "when the yolk doesn't break",
  'a warm bowl of congee',
  'dancing when no one is watching',
  'late night deep conversations',
  'bubble milk tea, half sweet, light ice',
  'obscure history videos on youtube',
  'talking philosophy and getting confused',
];

const sub1 = $('#side-slider-sub1');
const sub2 = $('#side-slider-sub2');

/**
 * Fisher-Yates Shuffle
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const eles = shuffle(items).map((e, i) => {
  const ele = $(
    `<span id='side-slider-item-${i}' class='side-slider-item'>${e}</span>`
  );
  sub1.append(ele);
  const ele2 = $(
    `<span id='side-slider-item-${i}' class='side-slider-item'>${e}</span>`
  );
  sub2.append(ele2);

  return ele;
});
