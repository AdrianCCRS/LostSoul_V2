export class gameover extends Phaser.Scene{
    constructor(){
        super({key : 'gameover'})
    }

    preload(){
        this.load.image('gameover-bg', '../../src/gameAssets/environment/gameover/gameover-bg.png')
    }

    create(){
        this.add.image( 400,304, 'gameover-bg')
    }

}