class Form {
    constructor(el) {
        
        this._el = el;
        this._elQuestionnaire = this._el.querySelector('[data-js-questionnaire]');
        this._elInputTache = this._elQuestionnaire.tache;
        this._elInputDescription = this._elQuestionnaire.description;
        this._elDetail = this._el.querySelector('[data-js-detail]');
		this._elBtnAjoute = this._el.querySelector('[data-js-ajouter]');

        this.init();
    }

    /**
	 * Initialiser les comportements
	 */
     init() {
    	this._elBtnAjoute.addEventListener('click', this.recupererListe.bind(this));
	}

    /**
	 * Récupère les valeurs du formulaire
	 * @param {Object} e 
	 */
	recupererListe(e) {
		e.preventDefault();
        
        let estValide1 = true,
            estValide2 = true;
           

        let elCheckedRadio = this._elQuestionnaire.querySelector('input[type=radio]:checked'),
            elsInputRadio = this._elQuestionnaire.querySelectorAll('[data-js-radio]');
            
        if(this._elInputTache.value) {
            if (this._elInputTache.previousElementSibling.classList.contains('erreur')) {
                this._elInputTache.previousElementSibling.classList.remove('erreur');
            } 
        } else {
                this._elInputTache.previousElementSibling.classList.add('erreur');
                estValide1 = false;
            }

        if(elCheckedRadio) {
            for (let i = 0, l = elsInputRadio.length; i < l; i++) {
                if (elsInputRadio[i].previousElementSibling.classList.contains('erreur')) {
                    elsInputRadio[i].previousElementSibling.classList.remove('erreur');
                } 
            }
        } else {
            for (let i = 0, l = elsInputRadio.length; i < l; i++) {
                elsInputRadio[i].previousElementSibling.classList.add('erreur');
                estValide2 = false;
            }
        }


        if (estValide1 && estValide2) {
            
            if (!this._elInputDescription.value) {
                this._elInputDescription.value = 'Aucune description disponible.';
            }

            let infos = {

                tache: this._elInputTache.value,

                description: this._elInputDescription.value,

                importance: elCheckedRadio.value

            };

            toDoList.push(infos);
                
            this.injecterListe(toDoList);
            
            this._elQuestionnaire.reset();
                
                
        }
        
    }

     

    injecterListe(toDoList) {
        this._elListe = document.querySelector('[data-js-liste]');

            let elNouvelDivListe = `<div class="wrapper-flex-row" data-js-tache="${toDoList.length - 1}">
                                    <p><small>Tâche : </small>${toDoList[toDoList.length - 1].tache} - <small>Importance : </small>${toDoList[toDoList.length - 1].importance}</p>
                                    <button class="btn-liste" type="submit" data-js-btnAfficheDetail="${[toDoList.length - 1]}">Afficher le détail</button>
                                    <button class="btn-liste" type="submit" data-js-btnSupprimer="${toDoList.length - 1}">Supprimer</button>
                                </div>`

            this._elListe.insertAdjacentHTML('beforeEnd', elNouvelDivListe);
            

            new Tache(this._elListe.lastElementChild);
            
        
    }

}



