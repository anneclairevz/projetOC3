class ResaClass {
    constructor() {
        this.station;
        this.clientName;
        this.firstName;
        this.date;
        this.timer;
        this.myInterval;

    };

    Init(station, nom, prenom, minutes) {
        this.station = station;
        this.clientName = nom;
        this.firstName = prenom;
        this.date = Date.now();
        this.timer = parseInt(minutes) * 60;
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

    check(minutes) {
        if (sessionStorage.getItem("date") !== null) {
            let now = Date.now();
            this.timer = Math.floor((now - sessionStorage.getItem("date")) / 1000);
            console.log(this.timer);
            if (this.timer < parseInt(minutes) * 60) {
                this.timer = parseInt(minutes) * 60 - this.timer;

                this.station = JSON.parse(sessionStorage.getItem("stationNom"));
                console.log(this.station);
                this.date = sessionStorage.getItem("date");
                this.clientName = localStorage.getItem("nom");
                this.firstName = localStorage.getItem("prenom");
                this.afficherResa();
                this.chrono();

            }
        }
    }

    //fonction afficher resa
    afficherResa() {
        let minutes = Math.floor(this.timer / 60) % 60;
        let secondes = this.timer % 60;
        document.getElementById("resaStationNom").innerHTML = this.station.address;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("secondes").innerHTML = secondes;
    };

    // chrono
    chrono() {
        this.myInterval = setInterval(function () {
            this.timer--;
            this.afficherResa();
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
