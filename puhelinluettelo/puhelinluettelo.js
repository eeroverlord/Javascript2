// Luettelo
const puhelinluettelo = {};
// Lisää -funktio
function lisaaNumero(nimi, numero) {
    puhelinluettelo[nimi] = numero;
    console.log(`Numero ${numero} lisätty luetteloon nimellä ${nimi}.`);
}
// Etsi -funktio
function etsiNumero(nimi) {
    const numero = puhelinluettelo[nimi];
    if (numero) {
        console.log(`Nimellä ${nimi} löydettiin numero ${numero}.`);
    } else {
        console.log(`Nimellä ${nimi} ei löydetty numeroa.`)
    }
}
// Käyttöliittymä
function aloita() {
    // Main loop ohjelmalle
    while (true) {
        console.log("1: Lisää numero");
        console.log("2: Etsi numero");
        console.log("3: Sulje");
        const valinta = prompt(">");
        // Muista tehdä integer, muuten ei toimi
        const valintaNumero = parseInt(valinta);
        if (valintaNumero === 1) {
            const nimi = prompt("Nimi>");
            const numero = prompt("Numero>");
            lisaaNumero(nimi, numero);
        } else if (valintaNumero === 2) {
            const nimi = prompt("Hae nimellä>")
            etsiNumero(nimi);
        } else if (valintaNumero === 3) {
            console.log("Ohjelma suljettu.");
            break;
        } else {
            console.log("Vaihtoehtoa ei löydetty.");
        }
    }
}
aloita();