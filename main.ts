/**
 * 1. Move forward while playing a melody (use play melody only) - set Front 2 Neopixel to White, other LEDs OFF (set color to Black to turn off neopixel)
 * 
 * 2. Move backward while playing 4 beeps tone (use play tone) - set back 2 Neopixel to Red and front 2 neopixel OFF
 * 
 * 3. Spin left for while playing a melody (use play melody only) - set Left 2 Neopixel to Orange and other 2 OFF
 * 
 * 3. Spin right forwhile playing a melody (use play melody only) - set right 2 Neopixel to Orange and other 2 OFF
 */
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
music.setVolume(15)
music.setTempo(240)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 128)
    music.playMelody("C5 B A G F E D C ", 120)
    maqueen.motorStop(maqueen.Motors.All)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 128)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    maqueen.motorStop(maqueen.Motors.All)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 128)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 128)
    music.playMelody("C D E F G A B C5 ", 120)
    maqueen.motorStop(maqueen.Motors.All)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 128)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 128)
    music.playMelody("A F E F D G E F ", 120)
    maqueen.motorStop(maqueen.Motors.All)
})
