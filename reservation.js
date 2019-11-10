class ResaClass {
    constructor() {
        this.station;
        this.clientName;
        this.firstName;
        this.date;
        this.minutes;

    };
    Init(station, nom, prenom, minutes) {
        this.station = station;
        this.clientName = nom;
        this.firstName = prenom;
        this.date = Date.now();
        this.minutes = minutes;

        sessionStorage.setItem("stationNom", this.station);
        localStorage.setItem("nom", this.clientName);
        localStorage.setItem("prenom", this.firstName);
        sessionStorage.setItem("date", this.date);

        // console.log(station);
        // console.log(clientName);
        // console.log(firstName);
    };

    check() {
        if (sessionStorage.getItem("date") !== null) {
            this.station = sessionStorage.getItem("stationNom");
            this.date = sessionStorage.getItem("date");
            this.clientName = localStorage.getItem("nom");
            this.firstName = localStorage.getItem("prenom");
            //appeler la fonction afficher resa
        }
    }
    //fonction afficher resa

    //fonction timer chrono
};









/*
class ResaClass {
    constructor() {
        this.station;
        this.clientName;
        this.firstname;
        this.date;
    }
    Init() {
        sessionStorage.setItem("station", this.station);
        sessionStorage.setItem("nom", this.clientName);
        sessionStorage.setItem("prenom", this.firstname);
        sessionStorage.setItem("date", this.date);

    }

    check(champ) {

        if (document.getElementById("nom").value == "") {
            alert("Entrez votre nom pour pouvoir effectuer une réservation");
            document.getElementById("nom").focus();
            return false;
        }

        if (document.getElementById("prenom").value == "") {
            alert("Vous devez entrer votre prénom pour effectuer une réservation");
            document.getElementById("prenom").focus();
            return false;
        }

        if (document.getElementById("canvas").value == "") {
            alert("Votre signature est obligatoire pour pouvoir effectuer une réservation");
            document.getElementById("canvas").focus();
            return false;
        }

    }
}

Test fonction surligne un champs vide

function surligne(champ, erreur) {
    if (erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}*/



