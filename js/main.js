let parquedediversiones = prompt("Ingrese el nombre del parque de diversiones al que desea asistir");
let precio = Number((prompt("Ingrese el precio individual de una entrada para el parque de diversiones " + parquedediversiones)));
let entradas = parseInt((prompt("Ingrese la cantidad de entradas que desea comprar")));
let montototal = parseFloat(precio * entradas).toFixed(2);
let resumen = "El total a pagar por " + entradas + " entradas para el parque de diversiones " + parquedediversiones + " es de: $" + montototal;
alert(resumen);