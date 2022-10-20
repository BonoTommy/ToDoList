class Tache {
    constructor(el) {
        this._el = el;
        


        this._elsSupprimerBtn = this._el.querySelectorAll('[data-js-btnSupprimer]');
        this._elsDetailBtn = this._el.querySelectorAll('[data-js-btnAfficheDetail]');
        
        
        this.init();
    }

    
    init() {
       this.supprimerTache();
       this.afficherDetail();
    }
    

    supprimerTache() {
        for (let i = 0; i < this._elsSupprimerBtn.length; i++) {
            this._elsSupprimerBtn[i].addEventListener('click', function(e){

                toDoList.splice(parseInt(i), 1);
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
        for (let i = 0; i < this._elsDetailBtn.length; i++) {

            this._elsDetailBtn[i].addEventListener('click', function(e){
                
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

