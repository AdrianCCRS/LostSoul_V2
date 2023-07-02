import {endWorldOne, worldOne} from "/static/game/js/scenes/worldOne.js"
import {mainMenu} from "/static/game/js/scenes/mainMenu.js"
import { pauseMenu } from "/static/game/js/scenes/pauseMenu.js"
import { gameover } from "/static/game/js/scenes/gameover.js"
import { about } from "/static/game/js/scenes/about.js"
const config = {
    //Decide si el navgador usa canvas o webGL adasd
    parent: 'juego',
    type: Phaser.AUTO,
    width: 800,
    height: 608,
    //Distintas escenas que pueda tener el juego
    scene:[mainMenu,worldOne, pauseMenu, gameover,endWorldOne, about],
    //Características físicas del juego
    physics:{
        default: "arcade",
        arcade:{
            gravity:{y : 1500},
            debug : false
        }
    },
}

let game = new Phaser.Game(config)

