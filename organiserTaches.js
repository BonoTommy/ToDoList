class OrganiserTaches {
    constructor(el) {
        this._el = el;
        this._elsDivListe = this._el.querySelectorAll('[data-js-liste]');
        this._elBtnTriAlpha = this._el.querySelector('[data-js-triAlpha]');
        this._elBtnTriNum = this._el.querySelector('[data-js-triImportance]');
        console.log(this._elsDivListe)

        this.init();
    }

    init() {

    }

    triAlpha() {
        this._elBtnTriAlpha.addEventListener('click', function() {
            
        })
    }

}