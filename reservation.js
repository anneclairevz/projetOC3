
//Création de l objet Resa
class ResaClass {
    //Constructeur de la classe 
    constructor(minutes) {
        this.station;
        this.clientName;
        this.firstName;
        this.date;
        this.timer = parseInt(minutes) * 60; //Définit le temps limite de réservation
        this.remain; //Le temps restant
        this.myInterval; //Le temps entre temps total - le temps écoulé

    };
//Initialisation de la station, on affecte les variables avec les valeurs récupérées
    Init(station, nom, prenom) {
        this.station = station;
        this.clientName = nom;
        this.firstName = prenom;
        this.date = Date.now();
        this.remain = this.timer;
        this.clear();
        this.afficherResa();
        this.chrono();
        //On stocke le nom de la station et la date dans session Storage
        sessionStorage.setItem("stationNom", JSON.stringify(this.station)); // Encode l'objet au format JSON
        localStorage.setItem("nom", this.clientName); //On stocke le nom et le prénom du client dans local Storage
        localStorage.setItem("prenom", this.firstName);
        sessionStorage.setItem("date", this.date);
        console.log(this.station.address);
        console.log(this.firstName);
        console.log(this.clientName);
    };
//Fonction check vérifie le temps et on récupère les données du client
    check() {
        if (sessionStorage.getItem("date") !== null) { //on vérifie s'il y a une resa en cours
            let now = Date.now(); //on récupère la date actuelle
            let secndPast = Math.floor((now - sessionStorage.getItem("date")) / 1000); //on calcule le nmbre de secondes qui s est ecoulé entre les 2
            console.log(secndPast);
            if (secndPast < this.timer) { //si le temps ecoulé est inferieur au temps defini
                this.remain = this.timer - secndPast; //on calcule le temps restant et on le reattribue au timer
                this.station = JSON.parse(sessionStorage.getItem("stationNom"));
                console.log(this.station);
                this.date = sessionStorage.getItem("date");
                this.clientName = localStorage.getItem("nom");
                this.firstName = localStorage.getItem("prenom");
                this.afficherResa();
                document.getElementById("timer").style.display = "block"; // ici on affiche le bloc du timer
                this.chrono(); //redéclenche le chrono
            //Si le temps est écoulé, on reset
            } else {
                this.clear();
            }
        }
    }

    //Fonction afficher resa
    afficherResa() {
        let minutes = Math.floor(this.remain / 60);
        let secondes = this.remain % 60; //Modulo = reste de la division
        document.getElementById("resaStationNom").innerHTML = this.station.address;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("secondes").innerHTML = secondes;
    };

    // Méthode du chrono
    chrono() {
        this.myInterval = setInterval(function () {
            this.remain--; //decremente la variable remain

            //Si le temps est inférieur ou égal à 0 on efface, et sinon on affiche la réservation
            if (this.remain <= 0) {
                document.getElementById("expr").style.display = "block";
                this.clear();
                console.log('le temps est écoulé');
            } else {
                this.afficherResa();
            }
        }.bind(this), 1000);
        //Si on clic sur le bouton annulerResa cela annule la réservation
        document.getElementById("annulerResa").addEventListener('click', function () {
            this.clear();
        }.bind(this));


    }
    // Méthode Clear qui vide SessionStorage
    clear() { 
        clearInterval(this.myInterval);
        sessionStorage.clear();
    }



}
