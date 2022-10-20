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
            estValide2 = true,
            estValide = true;

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

        if (!this._elInputDescription.value) {
            this._elInputDescription.value = 'Aucune description disponible.';
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
            estValide = true;
        } else {
            estValide = false;
        }

            if (estValide) {
                
                let infos = {};

                let cle = this._elInputTache.name,
                    valeur = this._elInputTache.value;
                infos[cle] = valeur;
                    
                let description = this._elInputDescription.name,
                        complementInfo = this._elInputDescription.value;
                infos[description] = complementInfo;
                
                let importance = elCheckedRadio.name,
                    degre = elCheckedRadio.value;
                infos[importance] = degre;

                toDoList.push(infos);
                    
                this.injecterListe(toDoList);
                
                new Tache(this._elListe.lastElementChild);
                new OrganiserTaches(this._elListe.lastElementChild);
                
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

            this._elInputTache.value = '';
            this._elInputDescription.value = '';
            let unchecked = document.querySelector('input[type=radio]:checked');
            unchecked.checked = false;
        
    }

}



