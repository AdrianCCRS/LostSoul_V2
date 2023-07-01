class protaLoginAnim extends Phaser.Scene{
    constructor(){
        super({key: "protaLoginAnim"});
    }
    preload(){
        this.load.spritesheet('protaLoginAnim', '/static/img/prota-frames-256x256.png', {frameWidth: 256, frameHeight: 256})
        this.load.spritesheet('key', '/static/img/prota-login.png', {frameWidth: 200, frameHeight: 200})
    }
    create(){
        this.prota = this.add.sprite(this.cameras.main.centerX-100,this.cameras.main.centerY, 'protaLoginAnim')
        this.key = this.add.sprite(this.cameras.main.centerX+30,this.cameras.main.centerY-80, 'key')
        this.key.setScale(0.8)
        this.prota.setScale(0.8)
        this.anims.create({
            key: 'login',
            frames: this.anims.generateFrameNumbers('protaLoginAnim', {start: 0, end: 1}),
            frameRate: 3,
            repeat: -1
        })
        this.anims.create({
            key: 'key-bubble',
            frames: this.anims.generateFrameNumbers('key', {start: 0, end: 1}),
            frameRate: 3,
            repeat: -1,
            yoyo: true
        })
        this.key.anims.play('key-bubble')
        this.prota.anims.play('login')
    }
    update(){
    }
}

const configLogin = {
    type: Phaser.AUTO,
    backgroundColor: '#ffffff',
    scale:{
        mode: Phaser.Scale.FIT,
        parent: 'login-anim',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: '100%',
        height: '100%',
    },
    scene:[protaLoginAnim],
}
let loginAnim = new Phaser.Game(configLogin)