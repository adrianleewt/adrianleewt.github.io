
main = "a long drive with friends, a piping hot wok, an early morning swim, a late night coffee, loud music in the shower, a medium rare steak, MF DOOM in the headphones, a smothered checkmate, finally solving a chess puzzle, when the yolk doesnt break, a warm bowl of congee, dancing when no one is watching, late night deep conversations, bubble milk tea half sweet light ice, obscure history videos on youtube, talking philosophy and getting confused,"

arr = main.split(', ')

new = []

for i, ele in enumerate(arr):
    new.append("<span id='side-slider-item-" + str(i) +
               "' class='side-slider-item'" + ">" + ele + "</span>")

print(''.join(new))
