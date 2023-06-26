export class title{

    constructor(scene){
        this.relatedScene = scene
    }

    preload(){
        this.relatedScene.load.spritesheet('title', '../../src/gameAssets/environment/MainMenu/components/titleSprite.png', {frameWidth: 396, frameHeight: 240})
    }
    create(){
        this.title = this.relatedScene.add.sprite(300,150, 'title')

        this.relatedScene.anims.create({
            key: 'titleAnim',
            frames: this.relatedScene.anims.generateFrameNames('title', {start: 0, end: 20}),
            frameRate: 15,
            repeat: -1,
            yoyo: true,
        })
        
        this.title.anims.play('titleAnim')
    }
        

    update(){
    }
}