input.onButtonPressed(Button.A, function () {
    if (lock1 == false) {
        if (num >= 33) {
            num = num - 1
        } else {
            num = 126
        }
        temp1 = String.fromCharCode(num)
        basic.showString(String.fromCharCode(num))
    } else {
        BLINK = false
        lock1 = false
        queue = 0
        basic.showString(temp1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (queue == 0) {
        lock1 = true
        Display = "S"
        ONum = 0
        BLINK = true
    } else if (queue == 1) {
        BLINK = false
        lock1 = false
        if (ONum == 0) {
            String2 = "" + String2 + temp1
            basic.clearScreen()
            basic.pause(200)
            basic.showString(temp1)
        } else if (ONum == 1) {
            String2 = String2.substr(0, String2.length - 1)
            basic.pause(100)
            basic.clearScreen()
            basic.showString(temp1)
        } else if (ONum == 2) {
            if (GS == 0) {
                num = 48
            } else if (GS == 1) {
                num = 65
            } else if (GS == 2) {
                num = 97
            } else {
                num = 32
            }
            if (GS < 3) {
                GS = GS + 1
            } else {
                GS = 0
            }
            basic.pause(100)
            basic.clearScreen()
            temp1 = String.fromCharCode(num)
            basic.showString(String.fromCharCode(num))
        } else {
            basic.clearScreen()
            basic.showString(Last)
        }
    }
    if (queue < 1) {
        queue = queue + 1
    } else {
        queue = 0
    }
})
radio.onReceivedString(function (receivedString) {
    Last = receivedString
    basic.showString(receivedString)
    basic.clearScreen()
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    if (lock1 == false) {
        if (num < 126) {
            num = num + 1
        } else {
            num = 32
        }
        temp1 = String.fromCharCode(num)
        basic.showString(String.fromCharCode(num))
    } else {
        if (ONum < 3) {
            ONum = ONum + 1
        } else {
            ONum = 0
        }
        if (ONum == 0) {
            BLINK = true
            Display = "S"
        } else if (ONum == 1) {
            BLINK = true
            Display = "D"
        } else if (ONum == 2) {
            BLINK = true
            Display = "G"
        } else {
            BLINK = true
            Display = "L"
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (lock1 == false) {
        radio.sendString(String2)
        lock1 = false
        temp1 = ""
        ONum = 0
        queue = 0
        BLINK = false
        basic.clearScreen()
        basic.showString(String2)
        String2 = ""
        basic.pause(1000)
        basic.clearScreen()
    }
})
let Display = ""
let BLINK = false
let Last = ""
let GS = 0
let String2 = ""
let queue = 0
let temp1 = ""
let ONum = 0
let lock1 = false
let num = 0
radio.setGroup(1)
num = 32
lock1 = false
ONum = 0
temp1 = ""
queue = 0
String2 = ""
GS += 0
Last = ""
BLINK = false
Display = "S"
basic.forever(function () {
    if (BLINK == true) {
        basic.clearScreen()
        basic.pause(150)
        basic.showString(Display)
    }
})
