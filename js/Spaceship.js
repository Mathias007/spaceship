export class Spaceship {
    #modifier = 5;
    #leftArrow = false;
    #rightArrow = false;

    constructor(element) {
        this.element = element;
    }

    init() {
        this.#setPosition();
        this.#eventListeners();
        this.#gameLoop();
    }

    #setPosition() {
        this.element.style.bottom = "0px";
        this.element.style.left = `${
            window.innerWidth / 2 - this.#getPosition()
        }px`;
    }

    #getPosition() {
        return this.element.offsetLeft + this.element.offsetWidth / 2;
    }

    #eventListeners() {
        window.addEventListener("keydown", ({ keyCode }) => {
            // przytrzymanie klawisza
            switch (keyCode) {
                case 37: // lewa strzałka
                    this.#leftArrow = true;
                    break;
                case 39: // prawa strzałka
                    this.#rightArrow = true;
                    break;
            }
        });

        window.addEventListener("keyup", ({ keyCode }) => {
            // upuszczenie klawisz
            switch (keyCode) {
                case 37: // lewa strzałka
                    this.#leftArrow = false;
                    break;
                case 39: // prawa strzałka
                    this.#rightArrow = false;
                    break;
            }
        });
    }

    #gameLoop = () => {
        this.#whatKey();
        requestAnimationFrame(this.#gameLoop);
    };

    #whatKey() {
        if (this.#leftArrow && this.#getPosition() > 0) {
            this.element.style.left = `${
                parseInt(this.element.style.left, 10) - this.#modifier
            }px`;
        }
        if (this.#rightArrow && this.#getPosition() < window.innerWidth) {
            this.element.style.left = `${
                parseInt(this.element.style.left, 10) + this.#modifier
            }px`;
        }
    }
}
