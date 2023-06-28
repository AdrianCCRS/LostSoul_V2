export class menuBar{

    constructor(scene){
        this.relatedScene = scene
        this.bgMenuBarItem = new bgMBar(scene)
        this.homeButtonItem = new homeButton(scene)
        this.pauseButtonItem = new pauseButton(scene)      
    }

    preload(){
        this.bgMenuBarItem.preload()
        this.homeButtonItem.preload()
        this.pauseButtonItem.preload()
    }
    create(){
        this.bgMenuBarItem.create()
        this.homeButtonItem.create()
        this.pauseButtonItem.create()
    }
        

    update(){
    }
}

export class bgMBar{

    constructor(scene){
        this.relatedScene = scene

    }
    preload(){
        this.relatedScene.load.spritesheet('bg-menu-bar', '../../src/gameAssets/environment/MainMenu/components/bg-menu-bar.png', {frameWidth: 250, frameHeight: 94})
    }
    create(){
        this.bgMenuBar = this.relatedScene.add.sprite(120,0, 'bg-menu-bar')
        this.bgMenuBar.setScrollFactor(0);
    }
        

    update(){
    }
}

export class homeButton{
    constructor(scene){
        this.relatedScene = scene
    }

    preload(){
        this.relatedScene.load.spritesheet('homeButton', '../../src/gameAssets/environment/MainMenu/components/homeButton.png', {frameWidth: 40, frameHeight: 30})
    }
    create(){
        this.homeButton = this.relatedScene.add.sprite(35,20, 'homeButton').setInteractive()
        this.homeButton.setScrollFactor(0);

        this.homeButton.on('pointerover', () => {
            this.homeButton.setFrame(1)
        })
        this.homeButton.on('pointerout', () => {
            this.homeButton.setFrame(0)
        }) 
        this.homeButton.on('pointerdown', () => {
            this.relatedScene.scene.start('mainMenu')
        })
    }
        

    update(){
    }
}

export class pauseButton{
    constructor(scene){
        this.relatedScene = scene
    }

    preload(){
        this.relatedScene.load.spritesheet('pauseButton', '../../src/gameAssets/environment/MainMenu/components/pauseButton.png', {frameWidth: 24, frameHeight: 30})
    }
    create(){
        this.pauseButton = this.relatedScene.add.sprite(75,20, 'pauseButton').setInteractive()
        this.pauseButton.setScrollFactor(0);

        this.pauseButton.on('pointerover', () => {
            this.pauseButton.setFrame(1)
        })
        this.pauseButton.on('pointerout', () => {
            this.pauseButton.setFrame(0)
        }) 
        this.pauseButton.on('pointerdown', () => {
            this.relatedScene.scene.pause('worldOne')
            this.relatedScene.scene.launch('pauseMenu' , )
        })
    }
        

    update(){
    }
}