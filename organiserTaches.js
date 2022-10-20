class OrganiserTaches {
    constructor(el) {
        this._el = el;
        this._elsDivListe = document.querySelectorAll('[data-js-liste]');
        this._elBtnTriAlpha = document.querySelector('[data-js-triAlpha]');
        this._elBtnTriNum = document.querySelector('[data-js-triImportance]');
        console.log(this._elBtnTriNum);
        
        this.init();
    }

    init() {
        this.triAlpha();
    }


    triAlpha(cle) {
        this._elBtnTriAlpha.addEventListener('click', function() {
            console.log('click');
            toDoList.sort(function(a, b) {
                   
                if (a.tache > b.tache) {
                    return 1;
                }
                if (b.tache > a.tache) {
                    return -1;
                }
                return 0; 
                
            })
        })
    }

    

    triNum() {
        this._elBtnTriNum.addEventListener('click', function() {
            console.log('click');
            toDoList.sort(function(a, b) {
                let importanceA = a.importance, 
                    importanceB = b.importance;
                
                if (importanceA > importanceB) {
                    return -1;
                } else if (importanceB > importanceA) {
                    return 1;
                } 
                return 0;
                
                
            })
        })
    }

}