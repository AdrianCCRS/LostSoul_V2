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

    create(data){
        this.timeScore = data.timeScore
        this.add.image( 400,304, 'pm-bg')
        this.pauseMenuComponentsItems.create()
        this.chrono = this.add.text(380, 485, this.timeScore, { fontFamily: 'Times New Roman', fontSize: 64, color: 'black' });

    }

    update(){
    }
}