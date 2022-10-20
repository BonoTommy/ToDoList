class Tache {
    constructor(el) {
        this._el = el;
        


        this._elSupprimerBtn = this._el.querySelectorAll('[data-js-btnSupprimer]');
        this._elDetailBtn = this._el.querySelectorAll('[data-js-btnAfficheDetail]');
        
        
        this.init();
    }

    
    init() {
       this.supprimerTache();
       this.afficherDetail();
       //this._elDetailBtn.addEventListener('click', this.afficherDetail.bind(this))
    }
    

    supprimerTache() {
        for (let i = 0; i < this._elSupprimerBtn.length; i++) {
            this._elSupprimerBtn[i].addEventListener('click', function(e){

                toDoList.splice(i, 1,'');
                e.target.parentNode.remove();
                
                let elDetail = document.querySelector('[data-js-detail]');
                if(elDetail.lastElementChild) {
                    if(elDetail.lastElementChild.dataset.jsMontredetail = i) {
                        elDetail.lastElementChild.remove();
                    }
                }
                console.log(toDoList)
            });
            
        }
        ;
        
    }

    afficherDetail() {
        for (let i = 0; i < this._elDetailBtn.length; i++) {

            this._elDetailBtn[i].addEventListener('click', function(e){
                
                //let indexBtnDetail = i,
                let elDetail = document.querySelector('[data-js-detail]');
                
                if(elDetail.lastElementChild) {
                    elDetail.lastElementChild.remove();
                }
                
                //for (let i = 0, l = toDoList.length; i < l; i++) {
                    //if (indexBtnDetail == i) {
                        let elNouvelDivDetail = `<div class="div__montreDetail" data-js-montreDetail="${i}">
                                                    <p><small>Tâche : </small>${toDoList[i].tache}</p>
                                                    <p><small>Description : </small>${toDoList[i].description}</p>
                                                    <p><small>Importance : </small>${toDoList[i].importance}</p>
                                                </div>`;

                        elDetail.insertAdjacentHTML('beforeEnd', elNouvelDivDetail);   
                    //}
                console.log(toDoList);    
                //}
            })
        }
        
    }

}

