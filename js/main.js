const rollerCosterPrice = 10000;
const hauntedHousePrice = 9000;
const mirrorMazePrice = 8000;
const ferrisWheelPrice = 12000;
const bumperCarsPrice = 9000;

let rollerCosterTickets = 0;
let hauntedHouseTickets = 0;
let mirrorMazeTickets = 0;
let ferrisWheelTickets = 0;
let bumperCarsTickets = 0;

let rollerCosterAmount = 0;
let hauntedHouseAmount = 0;
let mirrorMazeAmount = 0;
let ferrisWheelAmount = 0;
let bumperCarsAmount = 0;

let buyMore = "NO";
let validAttraction = false;

do {
    validAttraction = false;
    let attraction = prompt("Ingrese el nombre de la atracción de la que desea comprar entradas (Montaña Rusa, Casa Embrujada, Laberinto de Espejos, Vuelta al Mundo, Autos Chocadores)").toUpperCase();
    let tickets = parseInt((prompt("Ingrese la cantidad de entradas que desea comprar para la atracción " + attraction.toLowerCase())));
    console.log("Atracción: " + attraction + ", Cantidad de entradas: " + tickets);
    switch (attraction) {
        case "MONTAÑA RUSA":
            rollerCosterAmount = rollerCosterAmount + (rollerCosterPrice * tickets);
            rollerCosterTickets = rollerCosterTickets + tickets;
            console.log("Monto total Montaña Rusa: " + rollerCosterAmount + ", Cantidad de entradas Montaña Rusa: " + rollerCosterTickets);
            validAttraction = true;
            break;
        case "CASA EMBRUJADA":
            hauntedHouseAmount = hauntedHouseAmount + (hauntedHousePrice * tickets);
            hauntedHouseTickets = hauntedHouseTickets + tickets;
            console.log("Monto total Casa Embrujada: " + hauntedHouseAmount + ", Cantidad de entradas Casa Embrujada: " + hauntedHouseTickets);
            validAttraction = true;
            break;
        case "LABERINTO DE ESPEJOS":
            mirrorMazeAmount = mirrorMazeAmount + (mirrorMazePrice * tickets);
            mirrorMazeTickets = mirrorMazeTickets + tickets;
            console.log("Monto total Laberinto de Espejos: " + mirrorMazeAmount + ", Cantidad de entradas Laberinto de Espejos: " + mirrorMazeTickets);
            validAttraction = true;
            break;
        case "VUELTA AL MUNDO":
            ferrisWheelAmount = ferrisWheelAmount + (ferrisWheelPrice * tickets);
            ferrisWheelTickets = ferrisWheelTickets + tickets;
            validAttraction = true;
            console.log("Monto total Vuelta al Mundo: " + ferrisWheelAmount + ", Cantidad de entradas Vuelta al Mundo: " + ferrisWheelTickets);
            break;
        case "AUTOS CHOCADORES":
            bumperCarsAmount = bumperCarsAmount + (bumperCarsPrice * tickets);
            bumperCarsTickets = bumperCarsTickets + tickets;
            console.log("Monto total Autos Chocadores: " + bumperCarsAmount + ", Cantidad de entradas Autos Chocadores: " + bumperCarsTickets);
            validAttraction = true;
            break;
        default:
            alert("Usted ha ingresado una atracción que no se encuentra en el parque de diversiones. Por favor, ingrese una atracción válida.");
            break;
    }
    if (validAttraction) {
        buyMore = prompt("Desea comprar más entradas? (SI/NO)").toUpperCase();
    }
} while (buyMore === "SI" || !validAttraction);
let totalAmount = rollerCosterAmount + hauntedHouseAmount + mirrorMazeAmount + ferrisWheelAmount + bumperCarsAmount;
let bill = "Su monto total a pagar es de $" + totalAmount.toFixed(2) + " por la compra de ";
if (rollerCosterTickets > 0) {
    bill = bill + ", " + rollerCosterTickets + " entradas para la Montaña Rusa " + "($" + rollerCosterAmount + ")";
}
if (hauntedHouseTickets > 0) {
    bill = bill + ", " + hauntedHouseTickets + " entradas para la Casa Embrujada " + "($" + hauntedHouseAmount + ")";
}
if (mirrorMazeTickets > 0) {
    bill = bill + ", " + mirrorMazeTickets + " entradas para el Laberinto de Espejos " + "($" + mirrorMazeAmount + ")";
}
if (ferrisWheelTickets > 0) {
    bill = bill + ", " + ferrisWheelTickets + " entradas para la Vuelta al Mundo " + "($" + ferrisWheelAmount + ")";
}
if (bumperCarsTickets > 0) {
    bill = bill + ", " + bumperCarsTickets + " entradas para los Autos Chocadores " + "($" + bumperCarsAmount + ")";
}
alert(bill);