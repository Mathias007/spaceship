export class Enemy {
    constructor(container, intervalTime, enemyClass, lives = 1) {
        this.container = container;
        this.element = document.createElement("div");
        this.enemyClass = enemyClass;
        this.interval = null;
        this.intervalTime = intervalTime;
        this.lives = lives;
    }

    init() {
        this.#setEnemy();
        this.#updatePosition();
    }

    #setEnemy() {
        this.element.classList.add(this.enemyClass);
        this.container.appendChild(this.element);
        this.element.style.top = "0px";
        this.element.style.left = `${this.#randomPosition()}px`;
    }

    #randomPosition() {
        return Math.floor(
            Math.random() * (window.innerWidth - this.element.offsetWidth)
        );
    }

    #updatePosition() {
        this.interval = setInterval(
            () => this.#setNewPosition(),
            this.intervalTime
        );
    }

    #setNewPosition() {
        this.element.style.top = `${this.element.offsetTop + 1}px`;
    }

    remove() {
        clearInterval(this.interval);
        this.element.remove();
    }
}
