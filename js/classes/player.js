export class Player {
    constructor(scene, name, urlImage){
        this.scene = scene
        this.name = name
        this.urlImage = urlImage
        this.keyW;
        this.keyA;
        this.keyS;
        this.keyD;

        this.scene.load.image(this.name, this.urlImage)
    }

    loadKeys(){
        this.keymap = this.scene.input.keyboard.createCursorKeys()
        this.keyW = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.keyA = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.keyS = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.keyD = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    }

    updateKeys(scenePlayer){
        if(this.keyW.isDown){
            scenePlayer.setVelocityY(-100)
        }
        if(this.keyA.isDown){
            scenePlayer.setVelocityX(-100)
        }
        if(this.keyS.isDown){
            scenePlayer.setVelocityY(100)
        }
        if(this.keyD.isDown){
            scenePlayer.setVelocityX(100)
        }
    }

    enablePlayer(){
        return this.scene.physics.add.image(400,400,this.name) 
    }
}