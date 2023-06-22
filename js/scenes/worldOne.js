import { Player } from "../classes/player.js";
export class worldOne extends Phaser.Scene{
    constructor(){
        super({ key : "worldOne"});
    }

    preload(){

        //Cargando el entorno
        this.load.image('bg-level1', '../../src/gameAssets/environment/bg-nivel1.png')
        //Cargando el jugador
        this.prota = new Player(this, 'player', '../../src/gameAssets/characters/protagonista_stand_64.png')
        this.prota.loadKeys()

        //Cargando el TileMap y la imagen del Tileset
        this.load.image('tiles', '../../src/gameAssets/environment/bg-nivel1.png')
        this.load.tilemapTiledJSON('map', '../../src/gameDataSources/mapData.json')
        
    }

    create(){
        //Creando el mapa y añadiendole el tileset.
        const map = this.make.tilemap({key:'map'})
        const bgSet = map.addTilesetImage('bgLevelOne', 'tiles')
        map.createStaticLayer('background', bgSet, 0, 0)

        //Añadir jugador a las fisicas del juego
        this.player = this.prota.enablePlayer()
        //Colisiones con el borde del mapa
        this.player.setCollideWorldBounds(true) 

        //Creando las plataformas
        const platforms = map.createStaticLayer('platforms', bgSet,0,0)
        platforms.setCollisionByExclusion(-1, true)
        this.physics.add.collider(this.player, platforms)
    }

    update(){
        this.prota.updateKeys(this.player)
    }
}