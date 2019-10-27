/*class Resa {
    constructor() {
        this.name = name;
        
    }
}*/

const elt = document.getElementById('validerResa');    // On récupère l'élément sur lequel on veut détecter le clic
    elt.addEventListener('click', function() {          // On écoute l'événement click
    elt.innerHTML = "C'est réservé !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});
