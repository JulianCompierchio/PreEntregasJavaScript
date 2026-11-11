const rollerCoasterPrice = 10000;
const hauntedHousePrice = 9000;
const mirrorMazePrice = 8000;
const ferrisWheelPrice = 12000;
const bumperCarsPrice = 9000;

let rollerCoasterTickets = 0;
let hauntedHouseTickets = 0;
let mirrorMazeTickets = 0;
let ferrisWheelTickets = 0;
let bumperCarsTickets = 0;

let rollerCoasterAmount = 0;
let hauntedHouseAmount = 0;
let mirrorMazeAmount = 0;
let ferrisWheelAmount = 0;
let bumperCarsAmount = 0;

let buyMore = "NO";
let validAttraction = false;

let calculateTotalAmount = (rcAmount, hhAmount, mmAmount, fwAmount, bcAmount) => rcAmount + hhAmount + mmAmount + fwAmount + bcAmount;

function calculateBill(rollerCoasterTickets, hauntedHouseTickets, mirrorMazeTickets, ferrisWheelTickets, bumperCarsTickets, rollerCoasterAmount, hauntedHouseAmount, mirrorMazeAmount, ferrisWheelAmount, bumperCarsAmount) {

    let totalAmount = calculateTotalAmount(rollerCoasterAmount, hauntedHouseAmount, mirrorMazeAmount, ferrisWheelAmount, bumperCarsAmount);
    let bill = "Su monto total a pagar es de $" + totalAmount.toFixed(2) + " por la compra de ";

    if (rollerCoasterTickets > 0) {
        bill = bill + ", " + rollerCoasterTickets + " entradas para la Montaña Rusa " + "($" + rollerCoasterAmount + ")";
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
    return bill;
}

function isValidAttraction(attraction) {
    return attraction === "MONTAÑA RUSA" ||
        attraction === "CASA EMBRUJADA" ||
        attraction === "LABERINTO DE ESPEJOS" ||
        attraction === "VUELTA AL MUNDO" ||
        attraction === "AUTOS CHOCADORES";
}

function isValidTicketAmount(tickets) {
    return Number.isInteger(tickets) && tickets > 0;
}

do {
    validAttraction = false;

    let attraction = prompt("Ingrese el nombre de la atracción de la que desea comprar entradas (Montaña Rusa, Casa Embrujada, Laberinto de Espejos, Vuelta al Mundo, Autos Chocadores)");

    if (attraction === null) {
        alert("La compra de entradas ha sido cancelada.");
        continue;
    }

    if (attraction.trim() === "") {
        alert("No ingresaste ninguna atracción. Intentá de nuevo.");
        continue;
    }

    attraction = attraction.toUpperCase();

    if (!isValidAttraction(attraction)) {
        alert("Atracción inválida. Por favor, ingresá una atracción válida.");
        continue;
    }

    let tickets = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar para la atracción " + attraction.toLowerCase()));

    if (!isValidTicketAmount(tickets)) {
        alert("Entrada inválida. Por favor, ingresá un número entero mayor a 0.");
        continue;
    }

    console.log("Atracción: " + attraction + ", Cantidad de entradas: " + tickets);

    switch (attraction) {

        case "MONTAÑA RUSA":
            rollerCoasterAmount += rollerCoasterPrice * tickets;
            rollerCoasterTickets += tickets;
            console.log("Monto total Montaña Rusa: " + rollerCoasterAmount + ", Cantidad de entradas Montaña Rusa: " + rollerCoasterTickets);
            break;

        case "CASA EMBRUJADA":
            hauntedHouseAmount += hauntedHousePrice * tickets;
            hauntedHouseTickets += tickets;
            console.log("Monto total Casa Embrujada: " + hauntedHouseAmount + ", Cantidad de entradas Casa Embrujada: " + hauntedHouseTickets);
            break;

        case "LABERINTO DE ESPEJOS":
            mirrorMazeAmount += mirrorMazePrice * tickets;
            mirrorMazeTickets += tickets;
            console.log("Monto total Laberinto de Espejos: " + mirrorMazeAmount + ", Cantidad de entradas Laberinto de Espejos: " + mirrorMazeTickets);
            break;

        case "VUELTA AL MUNDO":
            ferrisWheelAmount += ferrisWheelPrice * tickets;
            ferrisWheelTickets += tickets;
            console.log("Monto total Vuelta al Mundo: " + ferrisWheelAmount + ", Cantidad de entradas Vuelta al Mundo: " + ferrisWheelTickets);
            break;

        case "AUTOS CHOCADORES":
            bumperCarsAmount += bumperCarsPrice * tickets;
            bumperCarsTickets += tickets;
            console.log("Monto total Autos Chocadores: " + bumperCarsAmount + ", Cantidad de entradas Autos Chocadores: " + bumperCarsTickets);
            break;

        default:
            alert("Usted ha ingresado una atracción que no se encuentra en el parque de diversiones. Por favor, ingrese una atracción válida.");
            continue;
    }
    validAttraction = true;
    if (validAttraction) {
        buyMore = prompt("Desea comprar más entradas? (SI/NO)").toUpperCase();
    }

} while (buyMore === "SI" || !validAttraction);

alert(calculateBill(rollerCoasterTickets, hauntedHouseTickets, mirrorMazeTickets, ferrisWheelTickets, bumperCarsTickets, rollerCoasterAmount, hauntedHouseAmount, mirrorMazeAmount, ferrisWheelAmount, bumperCarsAmount));