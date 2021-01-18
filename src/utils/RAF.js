class RAF {
    constructor() {
        this.bind()
        this.callbacks = []
        this.dt = 0
        this.lastT = Date.now()
        this.render()

    }

    subscribe(name, callback) {
        this.callbacks.push({
            name: name,
            callback: callback
        })
    }

    unsubscribe(name) {
        this.callbacks.forEach((item, i) => {
            if (item.name == name)
                this.callbacks.splice(i, i + 1)
        });
    }

    render() {
        this.dt = (Date.now() - this.lastT) * 0.1
        this.lastT = Date.now()

        let i = 0;
        while (i < this.callbacks.length) {
            this.callbacks[i].callback()
            i++
        }

        requestAnimationFrame(this.render)
    }

    bind() {
        this.subscribe = this.subscribe.bind(this)
        this.unsubscribe = this.unsubscribe.bind(this)
        this.render = this.render.bind(this)

    }
}

const _instance = new RAF()
export default _instance