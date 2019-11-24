class Form {
    constructor(station, Resa) {
        this.station = station;
        this.Resa = Resa;
        this.myCanvas;
        this.Init();

    }

    Init() {
        document.getElementById("validerResa").disabled = true;
        document.getElementById("stationNom").innerHTML = this.station.name;
        document.getElementById("stationAdresse").innerHTML = this.station.address;
        document.getElementById("stationEtat").innerHTML = this.station.status;
        document.getElementById("velosDispos").innerHTML = this.station.available_bikes;
        document.getElementById("attachesVelos").innerHTML = this.station.available_bike_stands;
        document.getElementById("boutonResa").addEventListener('click', function () {
            document.getElementById("resaForm").style.display = "block";
            this.myCanvas = new Canvas();
            this.myCanvas.canvas.addEventListener("mouseup", this.ValidationResa.bind(this));

        }.bind(this));
        document.getElementById("effacerSignature").addEventListener('click', function () {
            this.myCanvas.clearCanvas();
        }.bind(this));
        // event de la validation resa
        document.getElementById('validerResa').addEventListener('click', function () { // On écoute l'événement click
            this.Resa.Init(this.station, document.getElementById("nom").value, document.getElementById("prenom").value, 20);


        }.bind(this));

    }
    ValidationResa() {
        // Storing Field Values In Variables
        let name = document.getElementById("nom").value;
        let firstName = document.getElementById("prenom").value;


        // Conditions
        if (name != '' && firstName != '' && this.myCanvas.filled == true) {
            document.getElementById("validerResa").disabled = false;

        } else {
            alert("Merci de remplir le formulaire");
        }
    }

}
