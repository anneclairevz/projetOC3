// classe pour la map

class MapClass {
    constructor(mapID, lat, lng, zoom, URL) {
        this.mapID = mapID;
        this.lat = lat;
        this.lng = lng;
        this.zoom = zoom;
        this.URL = URL;

        this.map = L.map(mapID).setView([this.lat, this.lng], this.zoom); // map init.
        this.tilelayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Données de la carte &copy; <a href="http://www.openstreetmap.org/#map=5/51.500/-0.100">Open Street Map</a>',
            scrollWheelZoom: false, // ne fonctionne pas ?
            maxZoom: 18,
        });
        // skin de la carte affichée sur la map
        this.tilelayer.addTo(this.map);
    } // fin du constructor
    //nvelle fonction
    createMarkers() {
        // recupererStations (parametres Url,)
        class Markers {
            constructor(lattitude, longitude, status, address, availableBikes) {
                this.positionLat = lattitude;
                this.positionLong = longitude;
                this.status = status;
                this.address = address;
                this.availableBikes = availableBikes;

            };
        };
    };
    recupererStations() {
        ajaxGet(this.URL, function (response) {
            // console.log(response);
            let stations = JSON.parse(response);
            stations.forEach(function (station) {
                console.log(station);

            });

        });
    }



}; // fin de la classe
