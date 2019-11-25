class ResaClass {
    constructor(minutes) {
        this.station;
        this.clientName;
        this.firstName;
        this.date;
        this.timer = parseInt(minutes) * 60;
        this.remain;
        this.myInterval;

    };

    Init(station, nom, prenom) {
        this.station = station;
        this.clientName = nom;
        this.firstName = prenom;
        this.date = Date.now();
        this.remain = this.timer;
        this.clear();
        this.afficherResa();
        this.chrono();
        sessionStorage.setItem("stationNom", JSON.stringify(this.station)); //IL ENCODE L OBJECT AU FORMAT JSON
        localStorage.setItem("nom", this.clientName);
        localStorage.setItem("prenom", this.firstName);
        sessionStorage.setItem("date", this.date);
        console.log(this.station.address);
        console.log(this.firstName);
        console.log(this.clientName);
    };

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
                this.chrono(); //redeclenche le chrono

            } else {
                this.clear();
            }
        }
    }

    //fonction afficher resa
    afficherResa() {
        let minutes = Math.floor(this.remain / 60);
        let secondes = this.remain % 60; //modulo = reste de la division
        document.getElementById("resaStationNom").innerHTML = this.station.address;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("secondes").innerHTML = secondes;
    };
    // chrono

    chrono() {
        this.myInterval = setInterval(function () {
            this.remain--; //decremente la variable remain


            if (this.remain <= 0) {
                document.getElementById("expr").style.display = "block";
                this.clear();
                console.log('le temps est écoulé');
            } else {
                this.afficherResa();
            }


        }.bind(this), 1000);
        document.getElementById("annulerResa").addEventListener('click', function () {
            /*console.log('clic');*/
            this.clear()

        }.bind(this));


    }

    clear() {
        clearInterval(this.myInterval);
        sessionStorage.clear();
    }



}
