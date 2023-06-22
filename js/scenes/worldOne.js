export class worldOne extends Phaser.Scene{
    constructor(){
        super({ key : "worldOne"});
        this.keyW;
        this.keyA;
        this.keyS;
        this.keyD;
    }

    preload(){
        this.load.image('bg-level1', '../../src/gameAssets/environment/bg-nivel1.png')
        this.load.image('player', '../../src/gameAssets/characters/protagonista_stand_64.png')

        //CMAPA
        //
        this.load.image('tiles', '../../src/gameAssets/environment/bg-nivel1.png')
        this.load.tilemapTiledJSON('map', '../../src/gameDataSources/mapData.json')
        
        
    
        //Precarga del mapa de teclas
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    }

    create(){
        
        const map = this.make.tilemap({key:'map'})
        const bgSet = map.addTilesetImage('bgLevelOne', 'tiles')
        map.createStaticLayer('background', bgSet, 0, 0)
        this.player = this.physics.add.image(400,300,'player')

        //Mapeo de las teclas del juego
        this.keymap = this.input.keyboard.createCursorKeys()
        this.player.setCollideWorldBounds(true) 

        //Creando las plataformas
        const platforms = map.createStaticLayer('platforms', bgSet,0,0)
        platforms.setCollisionByExclusion(-1, true)
        this.physics.add.collider(this.player, platforms)
    }

    update(){
        if(this.keyW.isDown){
            this.player.setVelocityY(-100)
        }
        if(this.keyA.isDown){
            this.player.setVelocityX(-100)
        }
        if(this.keyS.isDown){
            this.player.setVelocityY(100)
        }
        if(this.keyD.isDown){
            this.player.setVelocityX(100)
        }
    }
}