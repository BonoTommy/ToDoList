class Accordion {
    constructor() {
        this._elDivAccordion = document.querySelector('[data-js-detail]');

        this._elImgChevron = document.querySelector('img');

        this.init();
    }

    init() {
        this._elImgChevron.addEventListener('click',this.fermeTiroir.bind(this));
    }

    fermeTiroir() {
        
        this._elDivAccordion.classList.toggle('is-open');
        
        if(this._elImgChevron.src != 'down.svg') {
            this._elImgChevron.src = 'down.svg';
        } else if (this._elImgChevron.src != 'up.svg') {
            this._elImgChevron.src = 'up.svg'
        }
    }
}