class Form {
    constructor(station, Resa) {
        this.station = station;
        this.Resa = Resa;
        this.myCanvas;
        this.Init();

    }

    Init() {
        document.getElementById("stationNom").innerHTML = this.station.name;
        document.getElementById("stationAdresse").innerHTML = this.station.address;
        document.getElementById("stationEtat").innerHTML = this.station.status;
        document.getElementById("velosDispos").innerHTML = this.station.available_bikes;
        document.getElementById("attachesVelos").innerHTML = this.station.available_bike_stands;
        document.getElementById("boutonResa").addEventListener('click', function () {
            document.getElementById("resaForm").style.display = "block";
            this.myCanvas = new Canvas();

        }.bind(this));
        document.getElementById("effacerSignature").addEventListener('click', function () {
            this.myCanvas.clearCanvas();
        }.bind(this));
        document.getElementById('validerResa').addEventListener('click', function () { // On écoute l'événement click
            this.Resa.Init(); //entrer les parametres get elt by id nom prenom station
        }.bind(this));
    }

}
