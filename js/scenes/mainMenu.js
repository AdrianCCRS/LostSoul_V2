import { playButton } from "../components/playButton.js"
import { creditsButton } from "../components/creditsButton.js"
import { title } from "../components/title.js"
import { mMenuPlayer } from "../components/mMenuPlayer.js"
import { sound } from "../components/sound.js"
export class mainMenu extends Phaser.Scene{
    constructor(){
        super({key : 'mainMenu'})
        this.playButton = new playButton(this)
        this.creditsButton = new creditsButton(this)
        this.title = new title(this)
        this.mMPlayer = new mMenuPlayer(this)
        this.soundItem = new sound(this)
    }

    preload(){
        this.load.image('mm-bg', '../../src/gameAssets/environment/MainMenu/main-menu-bg.png')
        this.playButton.preload()
        this.creditsButton.preload()
        this.title.preload()
        this.mMPlayer.preload()
        this.soundItem.preload()
    }

    create(){
        this.add.image( 400,304, 'mm-bg')
        this.playButton.create()
        this.creditsButton.create()
        this.title.create()
        this.mMPlayer.create()
        this.soundItem.create()
    }

    update(){
    }
}