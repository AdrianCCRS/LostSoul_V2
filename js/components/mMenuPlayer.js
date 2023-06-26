export class mMenuPlayer{

    constructor(scene){
        this.relatedScene = scene
    }

    preload(){
        this.relatedScene.load.spritesheet('mmplayer', '../../src/gameAssets/characters/prota-frames-128x128.png', {frameWidth: 128, frameHeight: 128})
    }
    create(){
        this.mmplayer_0 = this.relatedScene.add.sprite(700,100, 'mmplayer')
        this.mmplayer_1 = this.relatedScene.add.sprite(700,250, 'mmplayer')
        this.mmplayer_2 = this.relatedScene.add.sprite(700,400, 'mmplayer')
        this.relatedScene.anims.create({
            key: 'mmplayerAnim_0',
            frames: this.relatedScene.anims.generateFrameNames('mmplayer', {start: 40, end: 52}),
            frameRate:8,
            repeat: -1,
            yoyo: true,
        })
        
        this.relatedScene.anims.create({
            key: 'mmplayerAnim_1',
            frames: this.relatedScene.anims.generateFrameNames('mmplayer', {start: 64, end: 72}),
            frameRate:8,
            repeat: -1,
            yoyo: false,
        })

        this.relatedScene.anims.create({
            key: 'mmplayerAnim_2',
            frames: this.relatedScene.anims.generateFrameNames('mmplayer', {start: 8, end: 9}),
            frameRate:3,
            repeat: -1,
            yoyo: true,
        })
        this.mmplayer_0.anims.play('mmplayerAnim_0')
        this.mmplayer_1.anims.play('mmplayerAnim_1')
        this.mmplayer_2.anims.play('mmplayerAnim_2')
    }
        

    update(){
    }
}