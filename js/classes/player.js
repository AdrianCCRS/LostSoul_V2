export class Player {
    constructor(scene, name, urlImage, urlJson){
        this.scene = scene
        this.name = name
        this.urlJson = urlJson
        this.urlImage = urlImage
        this.keyW;
        this.keyA;
        this.keyS;
        this.keyD;

        this.scene.load.atlas(this.name, this.urlImage, this.urlJson)
    }

    loadKeys(){
        this.keymap = this.scene.input.keyboard.createCursorKeys()
        this.keyW = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.keyA = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.keyS = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.keyD = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.keyR = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
    }

    updateKeys(scenePlayer){
        
        if(this.keyA.isDown){
            scenePlayer.setVelocityX(-200)
            if (scenePlayer.body.onFloor()) {
                scenePlayer.play('idle', false);
                scenePlayer.play('walk', true);
              }
        }
        else if(this.keyD.isDown){
            scenePlayer.setVelocityX(200)
            if (scenePlayer.body.onFloor()) {
                scenePlayer.play('idle', false);
                scenePlayer.play('walk', true);
                
              }
        }
        else{
            scenePlayer.setVelocityX(0)
            if (scenePlayer.body.onFloor()) {
                scenePlayer.play('idle', true);
              }
        }

        if(this.keyW.isDown && scenePlayer.body.onFloor()){
            scenePlayer.setVelocityY(-800)
            scenePlayer.play('jump', true)
        }

        //Haciendo la reflexion para la izquierda
        if (scenePlayer.body.velocity.x > 0) {
            scenePlayer.setFlipX(false);
          } else if (scenePlayer.body.velocity.x < 0) {
            // otherwise, make them face the other side
            scenePlayer.setFlipX(true);
          }

        if(this.keyR.isDown){
            scenePlayer.setPosition(24,200)
        }
    }

    enablePlayer(){
        return this.scene.physics.add.sprite(0,0,this.name) 
    }
}