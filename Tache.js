class Tache {
    constructor(el) {
        this._el = el;
        this._index = this._el.dataset.jsTache;
        this._elSupprimerBtn = this._el.querySelector('[data-js-btnSupprimer]');
        this._elDetailBtn = this._el.querySelector('[data-js-btnAfficheDetail]');

        this._elParent = this._el.closest('[data-js-liste]');
        
        this.init();
    }

    
    init() {
       this._elSupprimerBtn.addEventListener('click', this.supprimerTache.bind(this));
       this._elDetailBtn.addEventListener('click', this.afficherDetail.bind(this));
    }
    

    supprimerTache() {

        toDoList.splice(this._index,1);

        this._elParent.innerHTML = '';

        for (let i = 0, l = toDoList.length; i < l; i++) {

            let elNouvelDivListe = `<div class="wrapper-flex-row" data-js-tache="${i}">
                                    <p><small>Tâche : </small>${toDoList[i].tache} - <small>Importance : </small>${toDoList[i].importance}</p>
                                    <button class="btn-liste" type="submit" data-js-btnAfficheDetail="${i}">Afficher le détail</button>
                                    <button class="btn-liste" type="submit" data-js-btnSupprimer="${i}">Supprimer</button>
                                </div>`

            this._elParent.insertAdjacentHTML('beforeEnd', elNouvelDivListe);
            new Tache(this._elParent.lastElementChild);
        }
        
        
    }

    afficherDetail() {
        
        for (let i = 0, l = toDoList.length; i < l; i++) {

            let elDetail = document.querySelector('[data-js-detail]');
            
            if(elDetail.lastElementChild) {
                elDetail.lastElementChild.remove();
            }
            
            
            let elNouvelDivDetail = `<div class="div__montreDetail" data-js-montreDetail="${i}">
                                        <p><small>Tâche : </small>${toDoList[this._index].tache}</p>
                                        <p><small>Description : </small>${toDoList[this._index].description}</p>
                                        <p><small>Importance : </small>${toDoList[this._index].importance}</p>
                                    </div>`;

            elDetail.insertAdjacentHTML('beforeEnd', elNouvelDivDetail);
                
        }
    }
}
