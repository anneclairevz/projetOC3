document.addEventListener('DOMContentLoaded', function () {


    let Resa = new ResaClass();
    // Instancie ici toute la classe avec un "NEW" et en insérant les paramètres principaux
    let mapVelos = new MapClass('map', 49.031825, 2.067596, 13, "https://api.jcdecaux.com/vls/v1/stations?contract=Cergy-pontoise&apiKey=da2e9657d290c96fa3e15abe1931d2ed8399f55e", Resa);
    mapVelos.recupererStations();
    Resa.check(20);
});
