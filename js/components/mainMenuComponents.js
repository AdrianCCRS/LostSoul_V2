export class mainMenuComponents{
    constructor(scene){
        this.relatedScene = scene
        //componentes
        this.playButtonItem = new playButton(scene)
        this.creditsButtonItem = new creditsButton(scene)
        this.titleItem = new title(scene)
        this.mMPlayerItem = new mMenuPlayer(scene)
        this.soundItem = new sound(scene, 700,535)
    }

    preload(){
        this.playButtonItem.preload()
        this.creditsButtonItem.preload()
        this.titleItem.preload()
        this.mMPlayerItem.preload()
        this.soundItem.preload()
    }

    create(){
        this.playButtonItem.create()
        this.creditsButtonItem.create()
        this.titleItem.create()
        this.mMPlayerItem.create()
        this.soundItem.create()
    }
}

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

export class playButton{

    constructor(scene){
        this.relatedScene = scene
    }

    preload(){
        this.relatedScene.load.spritesheet('playButton', '../../src/gameAssets/environment/MainMenu/components/playButton.png', {frameWidth: 278, frameHeight: 107})    
    }

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

export class sound{

    constructor(scene, x,y){
        this.relatedScene = scene
        this.x = x
        this.y = y
    }

    preload(){
        this.relatedScene.load.spritesheet('sound', '../../src/gameAssets/environment/MainMenu/components/sound.png', {frameWidth: 85, frameHeight: 75})    
    }

    create(){
        this.sound = this.relatedScene.add.sprite(this.x,this.y, 'sound').setInteractive()  
        this.sound.setFrame(1)     
        let clicked = false
        this.sound.on('pointerdown', () => {
            if(!clicked){
                this.sound.setFrame(0)
                clicked = true
            }
            else{
                this.sound.setFrame(1) 
                clicked = false
            }          
        })     
    }
        

    update(){ 
    }
}

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