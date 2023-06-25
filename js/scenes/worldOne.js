import { Player } from "../classes/player.js";
export class worldOne extends Phaser.Scene{
    constructor(){
        super({ key : "worldOne"});
    }

    preload(){

        //Cargando el entorno
        this.load.image('gameover', '../../src/gameAssets/environment/gameover.png')
        //Cargando el jugador
        this.prota = new Player(this, 'player', '../../src/gameAssets/characters/prota-frames.png','../../src/gameDataSources/characters/prota.json')
        this.prota.loadKeys()

        //Cargando el TileMap y la imagen del Tileset
        this.load.image('tiles', '../../src/gameAssets/environment/bg-nivel1.png')
        this.load.tilemapTiledJSON('map', '../../src/gameDataSources/mapData.json')
        
    }

    create(){

        
        //Creando el mapa y añadiendole el tileset.
        const map = this.make.tilemap({key:'map'})
        const bgSet = map.addTilesetImage('bgLevelOne16x16', 'tiles')
        const sqreBgSet = map.addTilesetImage('bg-with-squares', 'tiles2')
        map.createStaticLayer('background', bgSet, 0, 0)


        //Creando el game over
        this.gameOverImage = this.add.image(256, 288, 'gameover')
        this.gameOverImage.visible = false
        //Añadir jugador a las fisicas del juego
        this.player = this.prota.enablePlayer()
        this.player.setBounce(0.1)
        //Colisiones con el borde del mapa
        this.player.setCollideWorldBounds(true) 

        //Creando las plataformas
        const platforms = map.createStaticLayer('platforms', bgSet,0,0)
        platforms.setCollisionByExclusion(-1, true)
        this.physics.add.collider(this.player, platforms)

        //Creando las animaciones del protagonista
        this.prota.createAnimations()

        //Creando los objetos que dan muerte al personaje
        this.deathBlocks = this.physics.add.group({
            allowGravity: false,
            immovable: true
        })

        map.getObjectLayer('death').objects.forEach((block) => {
            const deathBlock = this.deathBlocks.create(block.x, block.y, '')
            deathBlock.setVisible(false)
        })

        this.physics.add.collider(this.player, this.deathBlocks, playerHit, null, this)
    }

    update(){
        this.prota.updateKeys(this.player)
    }
}

function playerHit(player, scene){
    
        player.play('death', true)
        player.disableBody()
        scene.scene.gameOverImage.visible = true
}


