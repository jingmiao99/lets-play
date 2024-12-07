namespace SpriteKind {
    export const boss = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 . . . 3 3 . . . . . . 
    . . . 3 f 1 1 1 f 3 . . . . . . 
    . . . 1 1 1 1 1 1 1 . f 1 . . . 
    . . . 1 1 9 1 9 1 1 . f 1 . . . 
    . . . 3 1 3 1 3 1 3 . f . . . . 
    . . . 1 1 1 1 1 1 1 . f . . . . 
    . . . . 3 3 1 1 1 . 3 3 . . . . 
    . . . . 3 3 . . . . 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 . . 2 2 . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 f 1 2 1 2 2 . 2 . . . 
    . . . . 3 2 2 2 f 2 3 2 2 . . . 
    . . . . . 2 2 2 2 2 . 1 2 . . . 
    . . . . . 2 2 2 2 2 . 1 1 . . . 
    . . . . 2 f f 2 2 2 2 f f . . . 
    . . . . 2 2 2 f 2 2 2 f f . . . 
    . . . . 2 2 f 2 2 2 2 . . . . . 
    . . . . 2 f 2 2 2 2 2 . . . . . 
    . . . . 2 f f f 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 6 . . . 6 . . . . . . 
    . . . . 6 2 6 2 6 2 6 . . . . . 
    . . . 6 6 6 6 2 6 6 6 6 . . . . 
    . . . 6 6 2 6 2 6 2 6 6 . 6 . . 
    . 6 6 6 6 1 6 2 6 1 6 6 6 6 . . 
    . 6 6 6 2 6 6 6 6 6 6 6 6 6 . . 
    . 6 . 6 2 2 f 6 f 6 2 6 . . . . 
    . . . 6 2 2 6 f 6 2 2 6 . . . . 
    . . . 6 2 6 6 6 6 2 2 6 . . . . 
    . . 6 6 6 6 6 f f 6 6 6 6 . . . 
    . . 6 6 6 6 6 6 f 6 6 6 6 . . . 
    . 6 6 6 6 6 6 f f f 6 6 6 6 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f 2 2 f . . . . . . . 
    . . . . f f 2 f f f . . . . . . 
    . . . . f 2 f f 2 f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f 2 2 2 f 2 . . . . . . 
    . . . . f f f 2 f f . . . . . . 
    . . . 2 f f 2 2 2 f 2 . . . . . 
    . . . 2 2 f f 2 f f 2 . . . . . 
    . . 2 2 2 f f f f 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.boss)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 . . . . 7 2 . . . . . . . . 
    2 7 2 . . 2 7 7 2 . 7 7 . 7 7 . 
    7 7 2 2 . 7 2 2 7 7 7 7 2 7 2 7 
    . 2 7 7 7 2 2 2 2 7 7 7 2 7 2 2 
    . . 7 . 7 2 7 7 7 7 2 . 2 2 7 2 
    . . 2 . 7 7 6 6 6 2 2 2 . . 2 . 
    . . . 2 2 7 7 7 7 2 2 2 . . . . 
    . 2 2 2 2 7 7 7 7 7 2 2 2 . . . 
    . 2 2 2 7 7 7 7 7 7 7 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, sprites.castle.rock0)
music.play(music.stringPlayable("C G E A - D B - ", 120), music.PlaybackMode.LoopingInBackground)
info.setLife(3)
