export class playButton{

    constructor(scene){
        this.relatedScene = scene
    }

    preload(){
        this.relatedScene.load.spritesheet('playButton', '../../src/gameAssets/environment/MainMenu/components/playButton.png', {frameWidth: 278, frameHeight: 107})    }

    create(){
        this.playButton = this.relatedScene.add.sprite(293.5,350, 'playButton').setInteractive()
        this.playButton.on('pointerover', () => {
            this.playButton.setFrame(1)
        })
        this.playButton.on('pointerout', () => {
            this.playButton.setFrame(0)
        })        
        this.playButton.on('pointerdown', () => {
                this.relatedScene.scene.start('worldOne')
        })
    }
        

    update(){
    }
}