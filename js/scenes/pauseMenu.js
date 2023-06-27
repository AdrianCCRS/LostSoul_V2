import { pauseMenuComponents } from "../components/pauseMenuComponents.js"
export class pauseMenu extends Phaser.Scene{
    constructor(){
        super({key : 'pauseMenu'})
        this.pauseMenuComponentsItems = new pauseMenuComponents(this)
    }

    preload(){
        this.load.image('pm-bg', '../../src/gameAssets/environment/PauseMenu/pause-menu-bg.png')
        this.pauseMenuComponentsItems.preload()
    }

    create(){
        this.add.image( 400,304, 'pm-bg')
        this.pauseMenuComponentsItems.create()
    }

    update(){
    }
}