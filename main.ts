/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maxim Malik
 * Created on: Dec 2025
 * This program makes different colours of an RGB LED flash
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let redLED = DigitalPin.P14
let greenLED = DigitalPin.P15
let blueLED = DigitalPin.P16

// button A pressed

input.onButtonPressed(Button.A, function () {

    // red
    basic.clearScreen()
    pins.digitalWritePin(redLED, 1)
    basic.showString('Red')
    basic.pause(1000)
    pins.digitalWritePin(redLED, 0)

    // green
    pins.digitalWritePin(greenLED, 1)
    basic.showString('Green')
    basic.pause(1000)
    pins.digitalWritePin(greenLED, 0)

    // blue
    pins.digitalWritePin(blueLED, 1)
    basic.showString('Blue')
    basic.pause(1000)
    pins.digitalWritePin(blueLED, 0)

    // magenta
    pins.digitalWritePin(redLED, 1)
    pins.digitalWritePin(blueLED, 1)
    basic.showString('Magenta')
    basic.pause(1000)
    pins.digitalWritePin(redLED, 0)
    pins.digitalWritePin(blueLED, 0)

    // yellow
    pins.digitalWritePin(redLED, 1)
    pins.digitalWritePin(greenLED, 1)
    basic.showString('Yellow')
    basic.pause(1000)
    pins.digitalWritePin(redLED, 0)
    pins.digitalWritePin(greenLED, 0)

    // cyan
    pins.digitalWritePin(greenLED, 1)
    pins.digitalWritePin(blueLED, 1)
    basic.showString('Cyan')
    basic.pause(1000)
    pins.digitalWritePin(greenLED, 0)
    pins.digitalWritePin(blueLED, 0)

    // white
    pins.digitalWritePin(redLED, 1)
    pins.digitalWritePin(greenLED, 1)
    pins.digitalWritePin(blueLED, 1)
    basic.showString('White')
    basic.pause(1000)
    pins.digitalWritePin(redLED, 0)
    pins.digitalWritePin(greenLED, 0)
    pins.digitalWritePin(blueLED, 0)

})
