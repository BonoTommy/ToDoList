window.addEventListener('DOMContentLoaded', function() {

    /**
     * Lance les instances des comportements DOM du composant data-js-form
     */
    let elForms = document.querySelectorAll('[data-js-form]');

    for (let i = 0,  l = elForms.length; i < l; i++) {
        new Form(elForms[i]);
    } 

});