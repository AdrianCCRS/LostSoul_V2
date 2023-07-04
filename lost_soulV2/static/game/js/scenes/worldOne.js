import { Player } from "/static/game/js/classes/player.js";
import { menuBar } from "/static/game/js/components/menuBar.js";

var gscore = 0
var firstFetch = true
export class worldOne extends Phaser.Scene{
    constructor(){
        super({ key : "worldOne"});
    }

    preload(){

        //Cargando el entorno
        this.load.spritesheet('wasd', '/static/game/src/gameAssets/environment/MainMenu/components/wasd.png', {frameWidth: 250, frameHeight: 117})
        this.load.image('map-src', '/static/game/src/gameAssets/environment/map-level1.png')
        this.load.tilemapTiledJSON('map', '/static/game/src/gameDataSources/mapData.json')

        //Cargando componentes
        this.menuBar = new menuBar(this)
        this.menuBar.preload()

        //Cargando el jugador
        this.prota = new Player(this, 'player-src', '/static/game/src/gameAssets/characters/prota-frames.png','/static/game/src/gameDataSources/characters/prota.json')
        this.prota.loadKeys()
    }

    create(){
        
        this.createClock()
        this.score=1000

        //Configurando el mapa.
        const map = this.make.tilemap({key:'map'})
        const bgTileSet = map.addTilesetImage('map-level1', 'map-src')
        map.createStaticLayer('background', bgTileSet, 0, 0) //Fondo
        const platforms = map.createStaticLayer('platforms', bgTileSet,0,0) //Plataformas

        //Configurando jugador
        this.prota.createAnimations()
        this.player = this.prota.enablePlayer()
        this.player.setBounce(0.1) //Rebote
        this.player.setCollideWorldBounds(true) //Activamos las colisiones con el borde del mapa

        //Configurando plataformas
        platforms.setCollisionByExclusion(-1, true)
        this.physics.add.collider(this.player, platforms)

        //Configurando camara e interacciones
        this.createObjects(map)
        this.configCamera()

        //Creando los componentes extras
        this.wasd = this.add.sprite(625,80,'wasd')
        this.menuBar.create()
        this.chrono = this.add.text(160, 7, '0:00', { fontFamily: 'Times New Roman', fontSize: 24, color: 'black' });
        this.chrono.setScrollFactor(0)
    }

    update(){

        this.prota.updateKeys(this.player)
        if(!this.pause){ //Actualizar reloj si no esta pausado
            this.currentTime = this.clock.getElapsed()
            this.timeFormat = this.currentTime / 1000
            this.chrono.setText(this.timeFormat.toFixed(2)) //Formato de tiempo
        }
    }

    /**
     * Esta funcion mata al jugador
     */
    playerHit(){        
        
        this.player.play('death', true)
        this.pause = true
        this.player.disableBody()
        this.time.addEvent({
            delay: 1500,
            loop: false,
            callback: () => {
                this.scene.launch("gameover");
            }
        })
        
    }

    /**
     * Esta funcion nos crea un 'clock' que nos servirá para
     * obtener el tiempo trasncurrido desde que llamamos un time event
     */
    createClock(){
        //Creamos los parametros para manejar el cronómetro
        this.currentTime = 0
        this.pause = false
        this.timeFormat = 0
        //Creamos un event que en realidad no hace nada pero que nos sirve para poder obtener un tiempo transcurrido
        this.clock = this.time.addEvent({
            callback: () => {return},
            callbackScope: this,
            delay: Number.MAX_VALUE,
        });
    }

    /**
     * Esta funcion crea objetos interactivos con el personaje
     * - Map : mapa de donde se sacará el ObjectLayer
     */
    createObjects(map){
        //Creamos un grupo de bloques
        this.deathBlocks = this.physics.add.group({
            allowGravity: false,
            immovable: true
        })
        //Para cada objeto del ObjectLayer creamos un bloque en el juego, invisible.
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

        //Añadimos las colisiones y las funciones asociadas
        this.physics.add.collider(this.player, this.deathBlocks, this.playerHit, null, this)
        this.physics.add.collider(this.player, this.winBlocks, playerWin, null, this)
    }

    /**
     * Esta funcion realiza la configuración de las cámaras del juego
     */
    configCamera(){
        //Definimos los limites del mundo y de la camara (para que siga al jugador)
        this.cameras.main.setBounds(0,0, 1200,608)
        this.physics.world.setBounds(0,0, 1200,608)
        //Funcion para que la camara principal siga al jugador
        this.cameras.main.startFollow(this.player, true, 0.5,0.5)
    }
}



/**
 * Esta funcion es llamada cuando el jugador llega al objetivo
 */
function playerWin(player){
    if(player.body.touching.down){
        player.play('vanish', true)
        gscore = this.score - (this.timeFormat*100)

            if(firstFetch){
            // Assuming you have a variable 'gscore' that holds the score value
            const scoreData = { score: gscore };

                        // Get the CSRF token from the cookie
            const csrftoken = getCookie('csrftoken');

            // POST request using the Fetch API
            fetch('/save-score/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken, // Include the CSRF token in the headers
            },
            body: JSON.stringify(scoreData),
            })
            .then((response) => {
                // Handle the response from Django
                if (response.ok) {
                // Handle success, if required
                console.log('Score sent to Django successfully.');
                console.log(scoreData)
                } else {
                // Handle errors, if required
                console.error('Failed to send score to Django.');
                }
            })
            .catch((error) => {
                // Handle errors that occurred during the fetch, if needed
                console.error('Error occurred during the fetch:', error);
            });

            firstFetch = false;
        }

        this.time.addEvent({
            delay: 600,
            loop: false,
            callback: () => {
                this.scene.start("endWorldOne");
            }
        })
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  

export class endWorldOne extends Phaser.Scene{
    constructor(){
        super({key: 'endWorldOne'})
    }

    preload(){
        this.load.video('end-scene', '/static/game/src/gameAssets/environment/WorldOne/end-scene.mp4')
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


