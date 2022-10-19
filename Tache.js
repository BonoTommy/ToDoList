class ListeTacheAction {
    constructor(el) {
        this._el = el;
        


        this._elSupprimerBtn = this._el.querySelectorAll('[data-js-btnSupprimer]');
        this._elDetailBtn = this._el.querySelectorAll('[data-js-btnAfficheDetail]');
        
        let index = this._el.dataset.jsTache;
        console.log(this._elSupprimerBtn.parentNode);
        console.log(this._elDetailBtn);
        
        this.init();
    }

    
    init() {
       this.supprimerTache();
       this._elDetailBtn.addEventListener('click', this.afficherDetail.bind(this))
    }
    

    supprimerTache() {
        for (let i = 0; i < this._elSupprimerBtn.length; i++) {
            this._elSupprimerBtn[i].addEventListener('click', function(e){

                toDoList.splice(i);
                e.target.parentNode.remove();

                console.log(toDoList);
                console.log(e.target);

            });
            
        }
        
        
    }

    /*afficherDetail(e) {
        let indexBtnDetail = this._elDetailBtn.dataset.jsBtnaffichedetail,
            elDetail = document.querySelector('[data-js-detail]');

        if(elDetail.lastElementChild) {
            elDetail.lastElementChild.remove();
        }

        for (let i = 0, l = toDoList.length; i < l; i++) {
            if (indexBtnDetail == i) {
                let elNouvelDivDetail = `<div class="div__montreDetail" data-js-montreDetail>
                                            <p><small>Tâche : </small>${toDoList[i].tache}</p>
                                            <p><small>Description : </small>${toDoList[i].description}</p>
                                            <p><small>Importance : </small>${toDoList[i].importance}</p>
                                        </div>`;

                elDetail.insertAdjacentHTML('beforeEnd', elNouvelDivDetail);
                
            }
            
        }
    }*/


}

