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
                scenePlayer.play('walk', true);
              }
        }
        else if(this.keyD.isDown){
            scenePlayer.setVelocityX(200)
            if (scenePlayer.body.onFloor()) {
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
            scenePlayer.setVelocityY(-600)
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
            if(this.scene.gameOverImage.visible == true){
                scenePlayer.play('idle', false)
                scenePlayer.enableBody(true)
                this.scene.gameOverImage.visible = false
            }
            scenePlayer.setPosition(24,200)
        }
    }

    enablePlayer(){
        return this.scene.physics.add.sprite(0,0,this.name) 
    }

    createAnimations(){
                //Creando la animacion de movimiento horizontal
                this.scene.anims.create({
                    key: 'walk',
                    frames: this.scene.anims.generateFrameNames(this.name, {
                        prefix: 'prota_walk_',
                        start: 0,
                        end: 7,
                    }),
                    frameRate: 7,
                    repeat: -1
                })
        
                //Creando una animacion de inactividad
                this.scene.anims.create({
                    key : 'idle',
                    frames: this.scene.anims.generateFrameNames(this.name, {
                        prefix: 'prota_stand_',
                        start: 0,
                        end: 1,
                    }),
                    frameRate : 3,
                    repeat: -1
                })
        
                //Creando una animacion de salto
                this.scene.anims.create({
                    key : 'jump',
                    frames: this.scene.anims.generateFrameNames(this.name, {
                        prefix: 'prota_jump_',
                        start: 1,
                        end: 7,
                    }),
                    frameRate : 5,
                })

                //Creando animacion de muerte
                //Creando una animacion de salto
                this.scene.anims.create({
                    key : 'death',
                    frames: this.scene.anims.generateFrameNames(this.name, {
                        prefix: 'prota_death_',
                        start: 0,
                        end: 7,
                    }),
                    frameRate : 5,
                })
    }

}