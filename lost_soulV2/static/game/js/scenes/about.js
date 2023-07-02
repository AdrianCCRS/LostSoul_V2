export class about extends Phaser.Scene{
    constructor(){
        super({key : 'about'})
    }

    preload(){
        this.load.spritesheet('back-btn', '/static/game/src/gameAssets/environment/About/about-back-btn.png', {frameWidth : 130, frameHeight: 67})
        this.load.image('about-bg', '/static/game/src/gameAssets/environment/About/about-bg.png')
    }

    create(){
        this.add.image( 400,304, 'about-bg')
        this.backBtn = this.add.sprite(690, 540, 'back-btn').setInteractive()
        this.backBtn.on('pointerover', () => {
            this.backBtn.setFrame(1)
        })
        this.backBtn.on('pointerout', () => {
            this.backBtn.setFrame(0)
        })        
        this.backBtn.on('pointerdown', () => {
                this.scene.stop('about')
        })
    }

    update(){
    }
}