// Instancie ici toute la classe avec un "NEW" et en insérant les paramètres principaux

let myMap = new MapClass('map', 49.034625, 2.067596, 14, "https://api.jcdecaux.com/vls/v1/stations?contract=Cergy-pontoise&apiKey=da2e9657d290c96fa3e15abe1931d2ed8399f55e");
mapVelos.recupererStations();

let markers = new Marker(stations.positionLat, stations.positionLong, stations.status, stations.address, stations.avalableBikes);
markers.createMarkers();
