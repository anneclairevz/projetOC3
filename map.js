// classe pour la map
class MapClass {
    constructor(mapID, lat, lng, zoom, URL) {
        this.mapID = mapID;
        this.lat = lat;
        this.lng = lng;
        this.zoom = zoom;
        this.URL = URL;
        this.markerElt;
        this.map = L.map(mapID, {
            center: [lat, lng],
            zoom: zoom,
            zoomAnimation: true,
            markerZoomAnimation: true,
            scrollWheelZoom: false
        }); // map init.
        this.tilelayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Données de la carte &copy; <a href="http://www.openstreetmap.org/#map=5/51.500/-0.100">Open Street Map</a>',
            maxZoom: 18,
        });
        // skin de la carte affichée sur la map
        this.tilelayer.addTo(this.map);
    } // fin du constructor

    //nvelle fonction
    createMarker(station) {
        var LeafIcon = L.Icon.extend({
            options: {
                shadowUrl: 'FA/bicycle-solid.svg',
                iconSize: [49, 99],
                shadowSize: [53, 110],
                popupAnchor: [0, -25]
            }
        });
        const greenIcon = new LeafIcon({
            iconUrl: 'FA/bike-green.svg'
        });
        const redIcon = new LeafIcon({
            iconUrl: 'FA/bike-red.svg'
        });
        const orangeIcon = new LeafIcon({
            iconUrl: 'FA/bike-orange.svg'
        });
        if ((station.status) === "OPEN" && (station.available_bikes) >= 5) {
            this.markerElt = L.marker(([station.position.lat, station.position.lng]), {
                icon: greenIcon
            }) //.addTo(map).bindPopup(station.address + ' la station est ouverte, il reste actuellement ' + station.available_bikes + ' vélos disponibles.');
        } else if ((station.status) === "OPEN" && (station.available_bikes) < 5 && (station.available_bikes) > 0) {
            this.markerElt = L.marker(([station.position.lat, station.position.lng]), {
                icon: orangeIcon
            }) //.addTo(map).bindPopup(station.address + ' la station est ouverte, il reste actuellement ' + station.available_bikes + ' vélos disponibles.');
        } else {
            this.markerElt = L.marker(([station.position.lat, station.position.lng]), {
                icon: redIcon
            }) //.addTo(map).bindPopup(station.address + ' la station est fermée, il ne reste actuellement que ' + station.available_bikes + ' vélos disponibles.');
        }
        this.map.addLayer(this.markerElt);

        // evenement addEventListener
        this.markerElt.addEventListener('click', function () {
            /*console.log('clic');*/
            let myFormulaire = new Form(station);
        });
    };
    recupererStations() {
        ajaxGet(this.URL, function (response) {
            // console.log(response);
            let stations = JSON.parse(response);
            stations.forEach(function (station) {
                //console.log(station);
                this.createMarker(station); //creation de la station grace a la fonction interne
            }.bind(this)); // transmet l acces a la fonction create markers
        }.bind(this)); // reste connecte a la classe Map
    }
};

// fin de la classe
