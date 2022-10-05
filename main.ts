input.onButtonPressed(Button.A, function () {
    counter += -1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += 1
    basic.showNumber(counter)
})
let counter = 0
basic.showIcon(IconNames.Happy)
counter = 0
basic.showNumber(counter)
basic.forever(function () {
    while (counter == 9) {
        basic.showIcon(IconNames.EigthNote)
    }
    while (counter == 7) {
        basic.showIcon(IconNames.EigthNote)
    }
})
