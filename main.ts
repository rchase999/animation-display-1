let x = 0
let y = 0
while (x < 5 && y < 5) {
    while (x < 5) {
        led.plot(x, y)
        basic.pause(500)
        x += 1
    }
    x = 0
    y += 1
}
while (x > -1 && y > -1) {
    while (x > -1) {
        led.unplot(x, y)
        basic.pause(500)
        x += -1
    }
    x = 4
    y += -1
}
basic.forever(function () {
	
})
