// classe pour la map
class MapClass {
    //Constructeur de la carte avec ses paramètres ID, latitude, longitude, niveau de zoom, URL JC Decaux...
    constructor(mapID, lat, lng, zoom, URL, Resa) {
        this.mapID = mapID;
        this.lat = lat;
        this.lng = lng;
        this.zoom = zoom;
        this.URL = URL;
        this.Resa = Resa;
        this.markerElt;
        this.map = L.map(mapID, {
            center: [lat, lng],
            zoom: zoom,
            zoomAnimation: true,
            markerZoomAnimation: true,
            scrollWheelZoom: false
        }); // map init.
        this.tilelayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { //Tuiles de la cartes
            attribution: 'Données de la carte &copy; <a href="http://www.openstreetmap.org/#map=5/51.500/-0.100">Open Street Map</a>', //copyright 
            maxZoom: 18,
        });
        // skin de la carte affichée sur la map
        this.tilelayer.addTo(this.map);
    } // fin du constructor

    //Nouvelle fonction pour créer un marker relié à une station
    createMarker(station) {
        let LeafIcon = L.Icon.extend({
            options: { //Tableau des options de l'icône
                shadowUrl: 'FA/bicycle-solid.svg',
                iconSize: [49, 99], 
                shadowSize: [53, 110],
                popupAnchor: [0, -25]
            }
        });
        const greenIcon = new LeafIcon({ //On définit les 3 différentes couleurs des icônes selon le statut de la station
            iconUrl: 'FA/bike-green.svg'
        });
        const redIcon = new LeafIcon({
            iconUrl: 'FA/bike-red.svg'
        });
        const orangeIcon = new LeafIcon({
            iconUrl: 'FA/bike-orange.svg'
        });
        //En fonction de l'état de la station on attribue une certaine icône de couleur
        if ((station.status) === "OPEN" && (station.available_bikes) >= 5) {  //Si c'est Ouvert et qu'il y a entre 5 vélos et + l'icône est verte
            this.markerElt = L.marker(([station.position.lat, station.position.lng]), {
                icon: greenIcon
            }) //.addTo(map).bindPopup(station.address + ' la station est ouverte, il reste actuellement ' + station.available_bikes + ' vélos disponibles.');
        } else if ((station.status) === "OPEN" && (station.available_bikes) < 5 && (station.available_bikes) > 0) {  //Si la station est Ouverte et qu'il y a entre 0 et 5 vélos, l'icône est orange
            this.markerElt = L.marker(([station.position.lat, station.position.lng]), {
                icon: orangeIcon
            }) //.addTo(map).bindPopup(station.address + ' la station est ouverte, il reste actuellement ' + station.available_bikes + ' vélos disponibles.');
        } else {
            this.markerElt = L.marker(([station.position.lat, station.position.lng]), {  //Autres : icône rouge
                icon: redIcon
            }) //.addTo(map).bindPopup(station.address + ' la station est fermée, il ne reste actuellement que ' + station.available_bikes + ' vélos disponibles.');
        }
        this.map.addLayer(this.markerElt); //On ajoute le marker sur la carte

        // evenement addEventListener
        this.markerElt.addEventListener('click', function () { //Quand on clique sur le marker, on affiche le bloc des infos de la station
            document.getElementById("resaForm").style.display = "none";
            let myFormulaire = new Form(station, this.Resa);
        }.bind(this));
    };
    recupererStations() { 
    //La fonction sert à parcourir le fichier Json et on crée un marker pour chaque station du fichier
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
