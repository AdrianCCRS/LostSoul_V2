import { sound } from "/static/game/js/components/mainMenuComponents.js"
export class pauseMenuComponents{
    constructor(scene){
        this.relatedScene = scene
        //componentes
        this.homeTextButtonItem = new homeTextButton(scene)
        this.pauseTextItem = new pauseText(scene)
        this.retryTextButtonItem = new retryTextButton(scene)
        this.backTextButtonItem = new backTextButton(scene)
        this.timeTextItem = new timeText(scene)
        this.soundItem = new sound(scene, 720, 535)
    }

    preload(){
        this.relatedScene.load.spritesheet('selected', '/static/game/src/gameAssets/environment/PauseMenu/components/selected.png', {frameWidth: 68, frameHeight: 87})
        this.pauseTextItem.preload()
        this.homeTextButtonItem.preload()
        this.retryTextButtonItem.preload()
        this.backTextButtonItem.preload()
        this.timeTextItem.preload()
        this.soundItem.preload()
    }

    create(){
        this.pauseTextItem.create()
        this.homeTextButtonItem.create()
        this.retryTextButtonItem.create()
        this.backTextButtonItem.create()
        this.timeTextItem.create()
        this.soundItem.create()
    }
}

export class pauseText{
    constructor(scene){
        this.relatedScene = scene
    }
    preload(){
        this.relatedScene.load.spritesheet('pauseTextSrc', '/static/game/src/gameAssets/environment/PauseMenu/components/pauseText.png',  {frameWidth: 376, frameHeight: 90})
    }
    create(){
        this.pauseTextBtn = this.relatedScene.add.sprite(315, 92, 'pauseTextSrc')
    }
}

export class homeTextButton{
    constructor(scene){
        this.relatedScene = scene
    }
    preload(){
        this.relatedScene.load.spritesheet('homeTextScr', '/static/game/src/gameAssets/environment/PauseMenu/components/homeTextButton.png',  {frameWidth: 163, frameHeight: 48})
    }
    create(){
        this.selectedItem = this.relatedScene.add.sprite(720,243,'selected')
        this.homeTextBtn = this.relatedScene.add.sprite(315, 243, 'homeTextScr').setInteractive()
        this.homeTextBtn.on('pointerover', () => {
            this.selectedItem.setFrame(1)
        })
        this.homeTextBtn.on('pointerout', () => {
            this.selectedItem.setFrame(0)
        })
        this.homeTextBtn.on('pointerdown', () => {
            this.relatedScene.scene.stop('worldOne')
            this.relatedScene.scene.start('mainMenu')
        })
    }
}

export class retryTextButton{
    constructor(scene){
        this.relatedScene = scene
    }
    preload(){
        this.relatedScene.load.spritesheet('retryTextSrc', '/static/game/src/gameAssets/environment/PauseMenu/components/retryTextButton.png',  {frameWidth: 301, frameHeight: 48})
    }
    create(){
        this.selectedItem = this.relatedScene.add.sprite(720,334,'selected')
        this.retryTextBtn = this.relatedScene.add.sprite(315, 334, 'retryTextSrc').setInteractive()
        this.retryTextBtn.on('pointerover', () => {
            this.selectedItem.setFrame(1)
        })
        this.retryTextBtn.on('pointerout', () => {
            this.selectedItem.setFrame(0)
        })
        this.retryTextBtn.on('pointerdown', () => {
            this.relatedScene.scene.start('worldOne')
        })
    }
}

export class backTextButton{
    constructor(scene){
        this.relatedScene = scene
    }
    preload(){
        this.relatedScene.load.spritesheet('backTextSrc', '/static/game/src/gameAssets/environment/PauseMenu/components/backTextButton.png',  {frameWidth: 181, frameHeight: 49})
    }
    create(){
        this.selectedItem = this.relatedScene.add.sprite(720,430,'selected')
        this.backTextBtn = this.relatedScene.add.sprite(315, 430, 'backTextSrc').setInteractive()
        this.backTextBtn.on('pointerover', () => {
            this.selectedItem.setFrame(1)
        })
        this.backTextBtn.on('pointerout', () => {
            this.selectedItem.setFrame(0)
        })
        this.backTextBtn.on('pointerdown', () => {
            this.relatedScene.scene.stop('pauseMenu')
            this.relatedScene.scene.resume('worldOne')
            this.relatedScene.scene.get('worldOne').prota.stopPlayer()

        })
    }
}

export class timeText{
    constructor(scene){
        this.relatedScene = scene
    }
    preload(){
        this.relatedScene.load.spritesheet('timeTextSrc', '/static/game/src/gameAssets/environment/PauseMenu/components/timeText.png',  {frameWidth: 233, frameHeight: 63})
    }
    create(){
        this.timeTextBtn = this.relatedScene.add.sprite(215, 520, 'timeTextSrc')
    }
}