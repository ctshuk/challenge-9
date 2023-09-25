let tempo = 0
let Delay = 0
basic.forever(function () {
    basic.showNumber(tempo)
    // Set variable tempo to rounded value of potentiometer reading mapped from low 0 high 1023 to low 40 high 200.
    tempo = Math.round(pins.map(
    edubitPotentioBit.readPotValue(),
    0,
    1023,
    40,
    200
    ))
    // Set variable Delay to 60 seconds divided by the value of variable tempo
    Delay = 60 * 1000 / tempo
    // The servo horn moves to position 60 degrees and  rests for a number of milliseconds as determined by the variable Delay. 
    // 
    // Then it moves to position 120 degrees and rests for a number of milliseconds as determined by the variable Delay. 
    // 
    // *The servo horn keeps moving to and fro as long as the EDU:BIT is powered on. 
    edubitMotors.setServoPosition(ServoChannel.S1, 60)
    basic.pause(Delay)
    edubitMotors.setServoPosition(ServoChannel.S1, 120)
    basic.pause(Delay)
})
