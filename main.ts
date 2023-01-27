function name (firstName: string) {
    return firstName
}
function checkingStatus (isRight: boolean) {
    if (isRight) {
        scene.setBackgroundColor(7)
        music.baDing.play()
    } else {
        scene.setBackgroundColor(2)
        info.changeCountdownBy(-5)
    }
}
// Don't forget to comment your code as you work!
if (info.score() >= 7) {
    scene.setBackgroundImage(assets.image`You win ending`)
} else {
    scene.setBackgroundImage(assets.image`you Loose`)
}
