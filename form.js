class Form {
    constructor(station) {
        this.station = station;
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
            let myCanvas = new Canvas();
        });
    }

}
