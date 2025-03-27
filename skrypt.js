function Formularz() {
    let wielkoscPowierzchni = document.getElementById("powierzchnia").value;
    var infoLabel = document.getElementById("infoLabel");
    infoLabel.innerText = `Liczba potrzebnych puszek: ${MinimalnaLiczbaPuszekDoPomalowania(wielkoscPowierzchni)}`;
    infoLabel.style.display = "block";
}

function MinimalnaLiczbaPuszekDoPomalowania(wielkoscPowierzchni){
    let puszka = 1; // litr
    let powierzchniaNapuszke = 4; // m^2

    return Math.ceil(wielkoscPowierzchni / powierzchniaNapuszke);
}