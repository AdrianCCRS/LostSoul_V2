import { Player } from "../classes/player.js";
export class worldOne extends Phaser.Scene{
    constructor(){
        super({ key : "worldOne"});
    }

    preload(){

        //Cargando el entorno
        this.load.image('bg-level1', '../../src/gameAssets/environment/bg-nivel1.png')
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
        const bgSet = map.addTilesetImage('bgLevelOneChiquito', 'tiles')
        map.createStaticLayer('background', bgSet, 0, 0)

        //Añadir jugador a las fisicas del juego
        this.player = this.prota.enablePlayer()
        this.player.setBounce(0.1)
        //Colisiones con el borde del mapa
        this.player.setCollideWorldBounds(true) 

        //Creando las plataformas
        const platforms = map.createStaticLayer('platforms', bgSet,0,0)
        platforms.setCollisionByExclusion(-1, true)
        this.physics.add.collider(this.player, platforms)

        //Creando la animacion de movimiento horizontal
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'prota_walk_',
                start: 0,
                end: 7,
            }),
            frameRate: 10,
            repeat: -1
        })

        //Creando una animacion de inactividad
        this.anims.create({
            key : 'idle',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'prota_stand_',
                start: 0,
                end: 1,
            }),
            frameRate : 3,
            repeat: -1
        })

        //Creando una animacion de salto
        this.anims.create({
            key : 'jump',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'prota_jump_',
                start: 1,
                end: 7,
            }),
            frameRate : 5,
        })
    }

    update(){
        this.prota.updateKeys(this.player)
    }
}