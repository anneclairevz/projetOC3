class ResaClass {
    constructor() {
        this.station;
        this.clientName;
        this.firstname;
        this.date;
    }
    Init() {
        //local storage pr nom prenom station date
        sessionStorage.setItem("station", this.station);
        sessionStorage.setItem("nom", this.clientName);
        sessionStorage.setItem("prenom", this.firstname);
        sessionStorage.setItem("date", this.date);

    }

    check(champ) {

        if (document.getElementById("nom").value == "") {
            alert("Entrez votre nom pour pouvoir effectuer une réservation");
            document.getElementById("nom").focus();
            return false;
        }

        if (document.getElementById("prenom").value == "") {
            alert("Vous devez entrer votre prénom pour effectuer une réservation");
            document.getElementById("prenom").focus();
            return false;
        }

        if (document.getElementById("canvas").value == "") {
            alert("Votre signature est obligatoire pour pouvoir effectuer une réservation");
            document.getElementById("canvas").focus();
            return false;
        }

    }
}

/* Test fonction surligne champs vide 
function surligne(champ, erreur) {
    if (erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}*/

// Test on submit


// Below Function Executes On Form Submit
function ValidationResa() {
    // Storing Field Values In Variables
    let name = document.getElementById("nom").value;
    let firstName = document.getElementById("prenom").value;
    let canva = document.getElementById("canvas").value;

    // Conditions
    if (name != '' && firstName != '' && canva != '') {
        alert("All type of validation has done on OnSubmit event.");
        return true;
    } else {
        alert("The Contact No. must be at least 10 digit long!");
        return false;
    }
}
