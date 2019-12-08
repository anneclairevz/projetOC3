
//On crée la classe Slider
class Slider {
    //Constructeur du slider : boutons défilement, étape tuto, corps, index du slide, btn pause, play)
    constructor(boutonLeft, boutonRight, etape, body, slideIndex, pause, play) {
        this.boutonLeft = document.getElementById(boutonLeft);
        this.boutonRight = document.getElementById(boutonRight);
        this.etape = document.getElementsByClassName(etape);
        this.body = document.getElementsByTagName(body);
        this.slideIndex = slideIndex;
        this.sliderAuto;
        this.initSlider(); //Fait démarrer le slider
        this.pause = document.getElementById(pause);
        this.play = document.getElementById(play);
    }
    //Initialise le slider
    initSlider() {
        this.afficherSlider(); //Appelle la fonction Afficher
        this.clickBouton(); //Appelle de la fonction clickBouton
        this.eventClavier(); //Appelle de la fonction eventClavier
        this.sliderAuto = setInterval(function () { //Définit l'interval du slider et le défilement
            this.slideIndex++;
            this.afficherSlider();
        }.bind(this), 5000); //Défile toutes les 5 secondes
    }
    afficherSlider() { //Défilement du slider selon le nombre de slides total
        if (this.slideIndex > this.etape.length) {
            this.slideIndex = 1;
        }
        // index = dernier élément du slider s'il dépasse le premier élément
        if (this.slideIndex < 1) {
            this.slideIndex = this.etape.length;
        }
        console.log(this.etape.length);

        for (var i = 0; i != this.etape.length; ++i) {
            this.etape[i].style.display = "none";
        }
        // Affiche l'élément du slider voulu
        this.etape[this.slideIndex - 1].style.display = "flex";
    }
    changeSlide(d) {
        // Arrête le slider auto

        // Affiche le slide suivant grâce aux touches 37 et 39 du clavier
        if (d === 39) {
            this.afficherSlider(this.slideIndex += 1);
        }
        // Affiche le slide précédent
        if (d === 37) {
            this.afficherSlider(this.slideIndex -= 1);
        }
    }
    pause() {
        this.pause.addEventListener("click", function () {
            this.sliderAuto =
                this.play === false;
            clearInterval(this.sliderAuto);
        }.bind(this));
    }
    //Méthode pour changer de slide avec la souris 
    clickBouton() {
        this.boutonRight.addEventListener("click", function () {
            this.changeSlide(39);
        }.bind(this));
        // Event du clic sur le bouton gauche
        this.boutonLeft.addEventListener("click", function () {
            this.changeSlide(37);
        }.bind(this)); //Fonction interne JS pour reconnecter l objet
    }
    eventClavier() { //écoute les événements du clavier, appelle la fonction changeSlide et passe en paramètre la touche
        this.body[0].addEventListener("keyup", function (e) {
            this.changeSlide(e.keyCode);
        }.bind(this));
    }
}
