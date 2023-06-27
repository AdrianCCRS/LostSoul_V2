import { Player } from "../classes/player.js";
import { menuBar } from "../components/menuBar.js";
export class worldOne extends Phaser.Scene{
    constructor(){
        super({ key : "worldOne"});
        //Cargando componentes
        this.menuBar = new menuBar(this)
        this.timerItem = new timer(this)
    }

    preload(){

        //Cargando el entorno
        this.load.spritesheet('wasd', '../../src/gameAssets/environment/MainMenu/components/wasd.png', {frameWidth: 250, frameHeight: 117})
        //Cargando el jugador
        this.prota = new Player(this, 'player', '../../src/gameAssets/characters/prota-frames.png','../../src/gameDataSources/characters/prota.json')
        this.prota.loadKeys()

        //Cargando el TileMap y la imagen del Tileset
        this.load.image('mapPNG', '../../src/gameAssets/environment/map-level1.png')
        this.load.tilemapTiledJSON('map', '../../src/gameDataSources/mapData.json')

        this.menuBar.preload()
        this.timerItem.preload()
    }

    create(){


        //Creando el mapa y añadiendole el tileset.
        const map = this.make.tilemap({key:'map'})
        const bgSet = map.addTilesetImage('map-level1', 'mapPNG')
        map.createStaticLayer('background', bgSet, 0, 0)

        this.gameOver = true

        //Añadir jugador a las fisicas del juego
        this.player = this.prota.enablePlayer()
        this.player.setBounce(0.1)

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

        //Para cada objeto del layer creamos un bloque en el juego, invisible.
        map.getObjectLayer('death').objects.forEach((block) => {
            const deathBlock = this.deathBlocks.create(block.x, block.y, '')
            deathBlock.setVisible(false)
        })
        
        this.winBlocks = this.physics.add.group({
            allowGravity: false,
            immovable: true
        })

        map.getObjectLayer('win').objects.forEach((block) => {
            const winBlock = this.winBlocks.create(block.x, block.y, '')
            winBlock.setVisible(false)
        })

        //Añadimos una colision y una funcion de muerte en caso de darse
        this.physics.add.collider(this.player, this.deathBlocks, playerHit, null, this)
        this.physics.add.collider(this.player, this.winBlocks, playerWin, null, this)
        
        //Definimos los limites reales del juego y de la camara (para que siga al jugador)
        this.cameras.main.setBounds(0,0, 1200,608)
        this.physics.world.setBounds(0,0, 1200,608)
        //Funcion para que la camara principal siga al jugador
        this.cameras.main.startFollow(this.player, true, 1,1)
         //Activamos las colisiones con el borde del mapa
        this.player.setCollideWorldBounds(true) 

        this.wasd = this.add.sprite(625,80,'wasd')
        this.menuBar.create()
        
        this.timerItem.create()
    }

    update(){
        this.prota.updateKeys(this.player)
        this.timerItem.update()
    }
}

/**
 * Esta funcion mata al jugador
 */
function playerHit(player, scene){
    
        player.play('death', true)
        player.disableBody()
        this.time.addEvent({
            delay: 1500,
            loop: false,
            callback: () => {
                this.scene.launch("gameover");
            }
        })
}

/**
 * Esta funcion es llamada cuando el jugador llega al objetivo
 */
function playerWin(player){
    player.play('vanish', true)
    this.time.addEvent({
        delay: 600,
        loop: false,
        callback: () => {
            this.scene.start("endWorldOne");
        }
    })
}

export class endWorldOne extends Phaser.Scene{
    constructor(){
        super({key: 'endWorldOne'})
    }

    preload(){
        this.load.video('end-scene', '../../src/gameAssets/environment/WorldOne/end-scene.mp4')
    }

    create(){
        this.endScene = this.add.video(400,304,'end-scene')
        this.endScene.play()

        this.time.addEvent({
            delay: 5000,
            loop: false,
            callback: () => {
                this.scene.start("mainMenu");
            }
        })
    }

    update(){
    }

}

export class timer{
    constructor(scene){
        this.relatedScene = scene
    }

    preload(){
        this.time = 0
    }
    create(){
        this.chrono = this.relatedScene.add.text(10, 10, 'Tiempo: 0', { fontFamily: 'Arial', fontSize: 24, color: '#ffffff' });
    }
        

    update(){
        this.time = this.relatedScene.time.deltaTime

        let timeFormat = this.time / 1000
        this.chrono.setText('Tiempo: ' + timeFormat.toFixed(2))
    }
}

