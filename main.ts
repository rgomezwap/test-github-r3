controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 30
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background1`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`plane0`, SpriteKind.Player)
mySprite.vx = 30
controller.moveSprite(mySprite, 0, 50)
scene.cameraFollowSprite(mySprite)
let xenemy = 0
let haenemigo = false
game.onUpdate(function () {
    scene.centerCameraAt(mySprite.x + 40, mySprite.y)
    if (mySprite2) {
        if (mySprite2.y > 144) {
            mySprite2.destroy()
            haenemigo = false
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (!(haenemigo)) {
        if (mySprite.x > 400 && mySprite.x < 1100 || mySprite.x > 1670 && mySprite.x < 2170) {
            haenemigo = true
            xenemy = randint(mySprite.x + 50, mySprite.x + 100)
            mySprite2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            mySprite2.setPosition(xenemy, 0 - 24)
            mySprite2.setVelocity(-10, 20)
            mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
            mySprite2.setFlag(SpriteFlag.AutoDestroy, false)
            animation.runImageAnimation(
            mySprite2,
            assets.animation`myAnim1`,
            250,
            true
            )
        }
    }
})
