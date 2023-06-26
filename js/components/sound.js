export class sound{

    constructor(scene){
        this.relatedScene = scene
    }

    preload(){
        this.relatedScene.load.spritesheet('sound', '../../src/gameAssets/environment/MainMenu/components/sound.png', {frameWidth: 85, frameHeight: 75})    
    }

    create(){
        this.sound = this.relatedScene.add.sprite(700,525, 'sound').setInteractive()  
        this.sound.setFrame(1)     
        let clicked = false
        this.sound.on('pointerdown', () => {
            if(!clicked){
                this.sound.setFrame(0)
                clicked = true
            }
            else{
                this.sound.setFrame(1) 
                clicked = false
            }          
        })     
    }
        

    update(){ 
    }
}