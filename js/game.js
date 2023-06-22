import {worldOne} from "./scenes/worldOne.js";

const config = {
    //Decide si el navgador usa canvas o webGL
    type: Phaser.AUTO,
    width: 800,
    height: 608,
    //Distintas escenas que pueda tener el juego
    scene:[worldOne],
    //Características físicas del juego
    physics:{
        default: "arcade",
        arcade:{
            gravity:{y : 1500},
            debug : false
        }
    }
}

let game = new Phaser.Game(config)

