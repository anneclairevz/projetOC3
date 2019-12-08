
//Déclaration des variables et récupération des éléments html

var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var activatedClass = 'hamburger-activated';

sidebarBody.innerHTML = content.innerHTML;

//On écoute l'evenement click sur le bouton et les onglets du menu apparaissent
button.addEventListener('click', function (e) {
	e.preventDefault();
//Sur le noeud parent, on change la class en "active" 
	this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function (e) {  //Quand la touche Echap est enfonçée, cela desactive la class du menu burger
	if (this.parentNode.classList.contains(activatedClass)) {
		if (e.repeat === false && e.which === 27)
			this.parentNode.classList.remove(activatedClass);
	}
});
//Les onglets du menu disparaissent 
overlay.addEventListener('click', function (e) {
	e.preventDefault();

	this.parentNode.classList.remove(activatedClass);
});
