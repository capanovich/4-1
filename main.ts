radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showString("A")
    }
    if (2 == receivedNumber) {
        basic.showString("B")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(5)
