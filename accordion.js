class Accordion {
    constructor() {
        this._elDivAccordion = document.querySelector('[data-js-detail]');

        this._elSpanChevron = document.querySelector('.chevron');

        this.init();
    }

    init() {
        this._elSpanChevron.addEventListener('click',this.actionTiroir.bind(this));
    }

    actionTiroir() {
        
        this._elDivAccordion.classList.toggle('is-open');

        this._elSpanChevron.classList.toggle('up');
        this._elSpanChevron.classList.toggle('bottom');
    }
}