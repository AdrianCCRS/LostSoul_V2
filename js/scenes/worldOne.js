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

        //Cargando el TileMap y las imagenes de los Tilesets
        this.load.image('bg', '../../src/gameAssets/environment/bg-nivel1-ampliado.png')
        this.load.image('brush', '../../src/gameAssets/environment/Sprites/brush.png')
        this.load.image('buildings', '../../src/gameAssets/environment/Sprites/Buildings.png')
        this.load.image('props-rocks', '../../src/gameAssets/environment/Sprites/Props-Rocks.png')
        this.load.image('assets1', '../../src/gameAssets/environment/Sprites/assets1.png')
        this.load.image('assets2', '../../src/gameAssets/environment/Sprites/assets2.png')
        this.load.image('tiles2', '../../src/gameAssets/environment/red-sqre.png')

        this.load.image('salt', '../../src/gameAssets/environment/Sprites/Salt.png')
        this.load.image('church', '../../src/gameAssets/environment/Sprites/church.png')

        //Cargando el JSON con la info del mapa
        this.load.tilemapTiledJSON('map', '../../src/gameDataSources/mapData.json')
        
    }

    create(){

        
        //Creando el mapa y añadiendole el tileset.
        const map = this.make.tilemap({key:'map'})
        /**
         * Creando los layers y añadiendoles los tilesets 
         * Primer argumento: nombre del Tileset
         * Segundo argumento: nombre de la imagen precargada relacionada al tileset
        */
        const bgSet_0 = map.addTilesetImage('bgLevelOneExtended', 'bg')
        const brush = map.addTilesetImage('brush', 'brush')
        const buildings = map.addTilesetImage('Buildings', 'buildings')
        const props_rocks = map.addTilesetImage('Props-Rocks', 'props-rocks')
        const assets1 = map.addTilesetImage('assets1', 'assets1')
        const assets2 = map.addTilesetImage('Objects', 'assets2')
        /**
         * Ahora añadimos los layers al mapa
         * Primer argumento: Indice del layer en el JSON del mapa
         * Segundo argumento: Tileset creado
         */     
        map.createStaticLayer(0, bgSet_0, 0, 0)
        map.createStaticLayer(1, buildings, 0,0)
        map.createStaticLayer(2, [assets1, brush, assets2], 0, 0)
        map.createStaticLayer(3, [assets1, brush, buildings, assets2], 0, 0)
        


        //Creando el game over
        this.gameOverImage = this.add.image(256, 288, 'gameover')
        this.gameOverImage.visible = false
        //Añadir jugador a las fisicas del juego
        this.player = this.prota.enablePlayer()
        this.player.setBounce(0.1)
        //Colisiones con el borde del mapa
        this.player.setCollideWorldBounds(true) 

        //Creando las plataformas
        const platforms = map.createStaticLayer(4, bgSet_0,0,0)
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
    
        this.cameras.main.startFollow(this.player)
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


