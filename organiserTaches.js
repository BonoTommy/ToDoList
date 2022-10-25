class OrganiserTaches {
    constructor() {
        
        this._elParent = document.querySelector('[data-js-liste]');
        this._elBtnTriAlpha = document.querySelector('[data-js-tritache]');
        this._elBtnTriNum = document.querySelector('[data-js-trinum]');
        //this._elsBtnTri = document.querySelectorAll('[data-js-action]')
        
        this._elTaches = document.querySelector('[data-js-sectionListe]');

        console.log(this._elTaches)

        //this._elParent = this._el.closest('[data-js-liste]');
        
        this.init();
    }

    init() {
      


        this._elTaches.addEventListener('click', function(e) {
            let cle = e.target.dataset.jsTri;
            if (cle == 'tache') this.tri(cle);
            if (cle == 'importance') this.tri(cle);
        }.bind(this))
    }





    tri(cle) {
       
        console.log(cle)

        toDoList.sort(function(a, b) {
                
            if (a[cle] > b[cle]) {
                return 1;
            }
            if (b[cle] > a[cle]) {
                return -1;
            }
            return 0; 
                
        })

        this._elParent.innerHTML = '';

        for (let i = 0, l = toDoList.length; i < l; i++) {
            let elListe = document.querySelector('[data-js-liste]');

            let elNouvelDivListe = `<div class="wrapper-flex-row" data-js-tache="${i}">
                                    <p><small>Tâche : </small>${toDoList[i].tache} - <small>Importance : </small>${toDoList[i].importance}</p>
                                    <button class="btn-liste" type="submit" data-js-btnAfficheDetail="${i}">Afficher le détail</button>
                                    <button class="btn-liste" type="submit" data-js-btnSupprimer="${i}">Supprimer</button>
                                </div>`

            elListe.insertAdjacentHTML('beforeEnd', elNouvelDivListe);
            new Tache(elListe.lastElementChild);
        }
    }





    triTache() {
       
        toDoList.sort(function(a, b) {
                
            if (a.tache > b.tache) {
                return 1;
            }
            if (b.tache > a.tache) {
                return -1;
            }
            return 0; 
                
        })

        this._elParent.innerHTML = '';

        for (let i = 0, l = toDoList.length; i < l; i++) {
            let elListe = document.querySelector('[data-js-liste]');

            let elNouvelDivListe = `<div class="wrapper-flex-row" data-js-tache="${i}">
                                    <p><small>Tâche : </small>${toDoList[i].tache} - <small>Importance : </small>${toDoList[i].importance}</p>
                                    <button class="btn-liste" type="submit" data-js-btnAfficheDetail="${i}">Afficher le détail</button>
                                    <button class="btn-liste" type="submit" data-js-btnSupprimer="${i}">Supprimer</button>
                                </div>`

            elListe.insertAdjacentHTML('beforeEnd', elNouvelDivListe);
            new Tache(elListe.lastElementChild);
        }
    }
    

    

    triNum() {
        
        
        toDoList.sort(function(a, b) {
        
            if (a.importance < b.importance) {
                return -1;
            } 
            
            if (b.importance < a.importance) {
                return 1;
            } 
            return 0;
        })

        this._elParent.innerHTML = '';

        for (let i = 0, l = toDoList.length; i < l; i++) {
            let elListe = document.querySelector('[data-js-liste]');

            let elNouvelDivListe = `<div class="wrapper-flex-row" data-js-tache="${i}">
                                    <p><small>Tâche : </small>${toDoList[i].tache} - <small>Importance : </small>${toDoList[i].importance}</p>
                                    <button class="btn-liste" type="submit" data-js-btnAfficheDetail="${i}">Afficher le détail</button>
                                    <button class="btn-liste" type="submit" data-js-btnSupprimer="${i}">Supprimer</button>
                                </div>`

            elListe.insertAdjacentHTML('beforeEnd', elNouvelDivListe);
            new Tache(elListe.lastElementChild);
            
        }
        
    }

}