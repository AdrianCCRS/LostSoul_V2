export class creditsButton{
    constructor(scene){
        this.relatedScene = scene
    }
    preload(){
        this.relatedScene.load.spritesheet('creditsButton', '../../src/gameAssets/environment/MainMenu/components/creditsButton.png', {frameWidth: 243, frameHeight: 52})
    }

    create(){
        this.creditsButton = this.relatedScene.add.sprite(290,480, 'creditsButton').setInteractive()
        this.creditsButton.on('pointerover', () => {
            this.creditsButton.setFrame(1)
        })
        this.creditsButton.on('pointerout', () => {
            this.creditsButton.setFrame(0)
        })        
        this.creditsButton.on('pointerdown', () => {
                this.relatedScene.scene.start('worldOne')
            })
    }
        

}