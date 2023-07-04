
class protaCommunityRankAnim extends Phaser.Scene{
    constructor(){
        super({key: "protaContactAnim"});
    }
    preload(){
        this.load.spritesheet('prota', '/static/img/prota-frames-256x256.png', {frameWidth: 256, frameHeight: 256})
        this.load.spritesheet('rank', '/static/img/ranking.png', {frameWidth: 195, frameHeight: 200})
    }
    create(){
        const gameWidth = this.sys.game.canvas.width
        const gameHeight = this.sys.game.canvas.height
        this.prota = this.add.sprite(this.cameras.main.centerX-100,this.cameras.main.centerY, 'prota')
        this.hi = this.add.sprite(this.cameras.main.centerX+60,this.cameras.main.centerY, 'rank')
        this.anims.create({
            key: 'prota-anim',
            frames: this.anims.generateFrameNumbers('prota', {start: 0, end: 1}),
            frameRate: 3,
            repeat: -1
        })
        this.anims.create({
            key: 'rank-medal',
            frames: this.anims.generateFrameNumbers('rank', {start: 0, end: 2}),
            frameRate: 2,
            repeat: -1,
        })
        this.hi.anims.play('rank-medal')
        this.prota.anims.play('prota-anim')      
    }
    update(){

    }
}

const config_comm_rank = {
    type: Phaser.AUTO,
    scale:{
        mode: Phaser.Scale.FIT,
        parent: 'rank-anim',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: '100%',
        height: '100%',
    },
    scene:[protaCommunityRankAnim],
    "transparent"    : true,
	"autoResize"     : true,
}

let comm_rank_anim = new Phaser.Game(config_comm_rank)
