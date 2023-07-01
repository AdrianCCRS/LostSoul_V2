
class protaContactAnim extends Phaser.Scene{
    constructor(){
        super({key: "protaContactAnim"});
    }
    preload(){
        this.load.image('backgorund', '/static/img/main-menu-bg.png')
        this.load.spritesheet('protaContactAnim', '/static/img/prota-frames-256x256.png', {frameWidth: 256, frameHeight: 256})
        this.load.spritesheet('hi', '/static/img/prota-saludo.png', {frameWidth: 200, frameHeight: 200})
    }
    create(){
        const gameWidth = this.sys.game.canvas.width
        const gameHeight = this.sys.game.canvas.height
        this.bg = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'backgorund')
        this.bg.setDisplaySize(gameWidth, gameHeight)
        this.prota = this.add.sprite(this.cameras.main.centerX-100,this.cameras.main.centerY, 'protaContactAnim')
        this.hi = this.add.sprite(this.cameras.main.centerX+30,this.cameras.main.centerY-150, 'hi')
        this.anims.create({
            key: 'contact',
            frames: this.anims.generateFrameNumbers('protaContactAnim', {start: 0, end: 1}),
            frameRate: 3,
            repeat: -1
        })
        this.anims.create({
            key: 'hi-bubble',
            frames: this.anims.generateFrameNumbers('hi', {start: 0, end: 1}),
            frameRate: 3,
            repeat: -1,
            yoyo: true
        })
        this.hi.anims.play('hi-bubble')
        this.prota.anims.play('contact')      
    }
    update(){

    }
}

const configContact = {
    type: Phaser.AUTO,
    scale:{
        mode: Phaser.Scale.FIT,
        parent: 'contact-anim',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: '100%',
        height: '100%',
    },
    scene:[protaContactAnim],
}

let contactAnim = new Phaser.Game(configContact)
