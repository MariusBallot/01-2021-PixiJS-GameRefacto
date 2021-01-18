import * as PIXI from 'pixi.js'
import RAF from '../utils/RAF'

class MainGame {
    constructor() {
        this.bind()
    }

    init(container) {
        this.renderer = new PIXI.Renderer({
            width: window.innerWidth,
            height: window.innerHeight,
            // transparent: true
        })
        this.stage = new PIXI.Container()

        this.vessel = PIXI.Sprite.from('images/vessel1.png')
        this.vessel.texture.baseTexture.on('loaded', () => {
            let vAR = this.vessel.height / this.vessel.width
            // this.vessel.anchor.set(0.5);
            // this.vessel.position.set(300, 300)
            this.vessel.width = this.renderer.width / 10
            this.vessel.height = this.vessel.width * vAR
            this.stage.addChild(this.vessel)
        });

        container.appendChild(this.renderer.view)

        RAF.subscribe('gameLoop', this.update)
    }

    update() {
        this.renderer.render(this.stage)
    }

    bind() {
        this.init = this.init.bind(this)
        this.update = this.update.bind(this)
    }
}

const _instance = new MainGame()

export default _instance