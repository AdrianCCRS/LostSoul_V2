export class gameover extends Phaser.Scene{
    constructor(){
        super({key : 'gameover'})
    }

    preload(){
        this.load.image('gameover-bg', '../../src/gameAssets/environment/gameover/gameover-bg.png')
        this.load.spritesheet('gameover-text', '../../src/gameAssets/environment/gameover/gameover-sprite.png', {frameWidth: 500, frameHeight: 1000})
        this.load.spritesheet('retry-btn', '../../src/gameAssets/environment/gameover/gameover-retry-btn.png', {frameWidth: 319, frameHeight: 97})
        this.load.spritesheet('out-btn', '../../src/gameAssets/environment/gameover/gameover-out-btn.png', {frameWidth: 319, frameHeight: 97})
    }

    create(){
        this.add.image( 400,304, 'gameover-bg')
        this.gameoverText = this.add.sprite(400,200,'gameover-text')
        this.retryBtn = this.add.sprite(200,435,'retry-btn').setInteractive()
        this.outBtn = this.add.sprite(600,435,'out-btn').setInteractive()

        //Animacion para el gameover
        this.anims.create({
            key: 'gameoverTextAnim',
            frames: this.anims.generateFrameNames('gameover-text', {start: 0, end: 11}),
            frameRate:12,
            repeat: -1,
            yoyo:true,
        })
        this.gameoverText.anims.play('gameoverTextAnim')

        //Animaciones botones
        this.retryBtn.on('pointerover', () => {
            this.retryBtn.setFrame(1)
        })
        this.retryBtn.on('pointerout', () => {
            this.retryBtn.setFrame(0)
        })        
        this.retryBtn.on('pointerdown', () => {
                this.scene.start('worldOne')
        })

        this.outBtn.on('pointerover', () => {
            this.outBtn.setFrame(1)
        })
        this.outBtn.on('pointerout', () => {
            this.outBtn.setFrame(0)
        })        
        this.outBtn.on('pointerdown', () => {
            this.scene.stop('worldOne')
            this.scene.start('mainMenu')
        })
    }

}