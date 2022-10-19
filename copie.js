class Form {
    constructor(el) {
        this._el = el;
        this._elInputTexts = this._el.querySelectorAll('input[type="text"]');
        this._elInputRadio = this._el.querySelector('input[value = "1"]');
        this._elListe = this._el.querySelector('[data-js-liste]');
        this._elDetail = this._el.querySelector('[data-js-detail]');
        this._elQuestionnaire = this._el.querySelector('[data-js-questionnaire]');
        this._elRadioButtons = this._el.querySelectorAll('input[type = radio]');
		this._elBtnAjoute = this._el.querySelector('[data-js-ajouter]');
        
        this.init();
        console.log(this._elQuestionnaire);
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
        
		// if (formulaireEstValide)
		//this._elBtn.disabled = true;

		let infos = {};
        this._elInputRadio = this._el.querySelector('input[type=radio]:checked');
        console.log(this._elInputRadioHaute);

        

        
		for (let i = 0, l = this._elInputTexts.length; i < l; i++) {
            
            if (this._elInputTexts[0].value != '' && this._elInputRadio.checked) {
                infos[cle] = valeur;
                infos[importance] = degre;
                toDoList.push(infos);
                this.injecterListe(toDoList);
            } else {
                this._elInputRadio = '';
            }
            if (this._elInputTexts[0].value == '') {
                this._elInputTexts[0].previousElementSibling.classList.add('erreur');
                console.log(this._elInputTexts[0].previousElementSibling);
            }
            if (this._elInputRadio = '') {
                for (let i = 0, l = this._elRadioButtons.length; i < l; i++) {
                    this._elRadioButtons[i].previousElementSibling.classList.add('erreur');
                } 
            }

            /*this._elInputTexts[i].name = '';
            this._elInputTexts[i].value = '';
            this._elInputRadio.name = '';
            this._elInputRadio.value = '';*/
        }
		
        /*this._elRadioButtons = this._el.querySelectorAll('input[type = radio]');

        for (let i = 0, l = this._elRadioButtons.length; i < l; i++) {
            if(this._elInputRadio == "") {
                this._elRadioButtons[i].classList.add('erreur');
            } 
            else {
                let importance = this._elInputRadio.name,
                    degre = this._elInputRadio.value;
                infos[importance] = degre;
            }
        }*/
        /*let importance = this._elInputRadio.name,
            degre = this._elInputRadio.value;
        infos[importance] = degre;*/
        
        /*toDoList.push(infos);
        
        this._elInputTexts[i].name = '';
        this._elInputTexts[i].value = '';
        this._elInputRadio.name = '';
        degre = this._elInputRadio.value = '';
        console.log(toDoList);

		this.injecterListe(toDoList);*/
        
	}

    injecterListe(toDoList) {

        this._elListe = document.querySelector('[data-js-liste]');

        this._elListe.insertAdjacentHTML('beforeEnd', `<div class="wrapper-flex-row"><p><small>Tâche : </small>${toDoList[toDoList.length - 1].tache} - <small>Importance : </small>${toDoList[toDoList.length - 1].importance}</p><button class="btn-liste" type="submit">Afficher le détail</button><button class="btn-liste" type="submit">Supprimer</button></div>`);
          
    }


	/**
	 * Injecte les valeurs du formulaire
	 * @param {Object} infos 
	 */
	injecterDetail(infos) {
		let detailDom = '';

		for (let i = 0, l = infos.length; i < l; i++ ) {
			detailDom += `<p><small>${infos[i]} : </small>${infos[i].value}</p>`;
		}

		this._elDetail.innerHTML = detailDom;
	}
}

class Form {
    constructor(el) {
        this._el = el;
        this._elInputTache = this._el.querySelector('input[name="tache"]');
        this._elInputDescription = this._el.querySelector('input[name="description"]');
        this._elInputRadio = this._el.querySelector('input[value = "1"]');
        this._elListe = this._el.querySelector('[data-js-liste]');
        this._elDetail = this._el.querySelector('[data-js-detail]');
        this._elQuestionnaire = this._el.querySelector('[data-js-questionnaire]');
        this._elRadioButtons = this._el.querySelectorAll('input[type = radio]');
		this._elBtnAjoute = this._el.querySelector('[data-js-ajouter]');
        
        this.init();
        console.log(this._elQuestionnaire);
        console.log(this._elInputTache);
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
        
		// if (formulaireEstValide)
		//this._elBtn.disabled = true;

		let infos = {};
        if(this._el.querySelector('input[type=radio]:checked')) {
        this._elInputRadio = this._el.querySelector('input[type=radio]:checked');
        }   
         
        let importance = this._elInputRadio.name,
            degre = this._elInputRadio.value;
        infos[importance] = degre;
        

            let cle = this._elInputTache.name,
                valeur = this._elInputTache.value;
            infos[cle] = valeur;
            
            let description = this._elInputDescription.name,
                    complementInfo = this._elInputTache.value;
            infos[description] = complementInfo;
            
            /*let importance = this._elInputRadio.name,
                degre = this._elInputRadio.value;
            infos[importance] = degre;*/
        
            
        if (this._elInputTache.value != '' && this._elInputRadio.checked) {
            infos[cle] = valeur;
            infos[description] = complementInfo;
            infos[importance] = degre;
            toDoList.push(infos);
            this.injecterListe(toDoList);
        } 
        if (this._elInputTache.value == '') {
            this._elInputTache.previousElementSibling.classList.add('erreur');
            console.log(this._elInputTache.previousElementSibling);
        }
        if (this._elInputRadio = '') {
            for (let i = 0, l = this._elRadioButtons.length; i < l; i++) {
                this._elRadioButtons[i].previousElementSibling.classList.add('erreur');
            } 
        }
            /*this._elInputTexts[i].name = '';
            this._elInputTexts[i].value = '';
            this._elInputRadio.name = '';
            this._elInputRadio.value = '';*/
        
		
        /*this._elRadioButtons = this._el.querySelectorAll('input[type = radio]');

        for (let i = 0, l = this._elRadioButtons.length; i < l; i++) {
            if(this._elInputRadio == "") {
                this._elRadioButtons[i].classList.add('erreur');
            } 
            else {
                let importance = this._elInputRadio.name,
                    degre = this._elInputRadio.value;
                infos[importance] = degre;
            }
        }*/
        /*let importance = this._elInputRadio.name,
            degre = this._elInputRadio.value;
        infos[importance] = degre;*/
        
        /*toDoList.push(infos);
        
        this._elInputTexts[i].name = '';
        this._elInputTexts[i].value = '';
        this._elInputRadio.name = '';
        degre = this._elInputRadio.value = '';
        console.log(toDoList);

		this.injecterListe(toDoList);*/
        
	}

    injecterListe(toDoList) {

        this._elListe = document.querySelector('[data-js-liste]');

            this._elListe.insertAdjacentHTML('beforeEnd', `<div class="wrapper-flex-row"><p><small>Tâche : </small>${toDoList[toDoList.length - 1].tache} - <small>Importance : </small>${toDoList[toDoList.length - 1].importance}</p><button class="btn-liste" type="submit">Afficher le détail</button><button class="btn-liste" type="submit">Supprimer</button></div>`);
          
    }


}

/*apres correction de Simon*/

class Form {
    constructor(el) {
        this._el = el;
        this._elQuestionnaire = this._el.querySelector('[data-js-questionnaire]');
        //this._elInputTache = this._el.querySelector('input[name="tache"]');
        this._elInputTache = this._elQuestionnaire.tache;
        this._elInputDescription = this._el.querySelector('input[name="description"]');
        //this._elInputRadio;
        this._elListe = this._el.querySelector('[data-js-liste]');
        this._elDetail = this._el.querySelector('[data-js-detail]');
        this._elRadioButtons = this._el.querySelectorAll('input[type = radio]');
		this._elBtnAjoute = this._el.querySelector('[data-js-ajouter]');
        
        this.init();
    }

    /**
	 * Initialiser les comportements
	 */
     init() {
    	this._elBtnAjoute.addEventListener('submit', this.recupererListe.bind(this));
	}

    /**
	 * Récupère les valeurs du formulaire
	 * @param {Object} e 
	 */
	recupererListe(e) {
		e.preventDefault();

        // VALIDATION -> if(this.validation())

		
        /*
        if(this._elQuestionnaire.querySelectorAll('input[type=radio]:checked') != 0) {
            this._elInputRadio = this._elQuestionnaire.querySelector('input[type=radio]:checked');
        } 
        */

        

            let infos = {};
           
            
            console.log(this._elInputRadio);
            
                let cle = this._elInputTache.name,
                        valeur = this._elInputTache.value;
                    infos[cle] = valeur;
                    
                let description = this._elInputDescription.name,
                        complementInfo = this._elInputTache.value;
                infos[description] = complementInfo;
                
                let importance = this._elInputRadio.name,
                    degre = this._elInputRadio.value;
                infos[importance] = degre;

                toDoList.push(infos);

                console.log(infos);
                    
                this.injecterListe(toDoList);
    }

    validation(infos) {
        //e.preventDefault();
        let estValide = true;

        let elCheckedRadio = this._elQuestionnaire.querySelector('input[type=radio]:checked')


        if(this._elInputTache.value) {

        }


        if(elCheckedRadio) {

        }
    }
}
        /*
        for (let i = 0, l = this._elInputRadioButtons.length; i < l; i++) {
            if (this._elQuestionnaire.querySelectorAll('input[type="radio"]:checked') == 0 || infos.tache == '') {
                estValide = false;
                if (this._elQuestionnaire.querySelectorAll('input[type="radio"]:checked') == 0) {
                        this._elInputRadioButtons[i].previousElementSibling.classList.add('erreur');
                } else if (infos.value == '') {
                    this._elInputTache.previousElementSibling.classList.add('erreur');
                }
            }
        }
        -*



        return estValide;
    }
     
    injecterListe(toDoList) {
        this._elListe = document.querySelector('[data-js-liste]');

            this._elListe.insertAdjacentHTML('beforeEnd', `<div class="wrapper-flex-row" data-js-tache="${toDoList[toDoList.length - 1]}"><p><small>Tâche : </small>${toDoList[toDoList.length - 1].tache} - <small>Importance : </small>${toDoList[toDoList.length - 1].importance}</p><button class="btn-liste" type="submit">Afficher le détail</button><button class="btn-liste" type="submit">Supprimer</button></div>`);
         
    }


}


class ListeTacheAction {
    constructor(el) {
        this._el = el;

        this._elSupprimerBtn = this._el.querySelector('[data-js-btnSupprimer]');
        this._elDetailBtn = this._el.querySelector('[data-js-btnAfficheDetail]');
        
        let index = this._el.dataset.jsTache;
        console.log(this._elSupprimerBtn.parentNode);
        console.log(this._elDetailBtn);
        console.log(this._elSupprimerBtn.dataset.jsBtnsupprimer);
        
        this.init();
    }

    
    init() {
       this._elSupprimerBtn.addEventListener('click', this.supprimerTache.bind(this));
       this._elDetailBtn.addEventListener('click', this.afficherDetail.bind(this))
    }
    

    supprimerTache() {

        let indexBtnSupprimer = this._elSupprimerBtn.dataset.jsBtnsupprimer;

        toDoList.splice(indexBtnSupprimer);
        this._el.remove();

        console.log(toDoList);
        
    }

    afficherDetail(e) {
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
    }


}

*/