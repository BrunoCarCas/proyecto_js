//PRIMERA ENTREGA  

/*let contador = 12;
let rta = "";
let boletin = "Materias cursadas:\n";
let promedio = 0;

do {
    let materia = prompt("Ingrese su materia");
    let nota = Number(prompt("Ingrese su nota"));

    boletin += materia + " " + nota + "\n";
    contador--;
  promedio = (promedio * (contador + 1) + nota) / (contador + 1);

    rta = prompt("¿Desea salir? (escriba la palabra 'ESC')").toUpperCase();
} while (contador !== 0 && rta !== "ESC");

alert(boletin + "\nPromedio: " + promedio.toFixed(2));

if (promedio >=0.55){
    alert ("¡¡¡FELICITACIONES!!!\n Promovido al proximo año")
}else{
    alert ("Tienes que recursar el año...")
};*/

////////////////////////////////////////////////////////////////////////////////

//SEGUNDA ENTREGA

const materias = [];


function agregarMateria() {
    const materia = prompt("Ingrese el nombre de la materia");
    const nota = parseFloat(prompt("Ingrese la nota"));

    materias.push({
    nombre: materia,
    notas: [nota],
    });
}


function calcularPromedio() {
    let totalNotas = 0;
    let totalExamenes = 0;

    for (const materia of materias) {
    for (const nota of materia.notas) {
        totalNotas += nota;
        totalExamenes++;
    }
    }

    return totalNotas / totalExamenes;
}

function generarBoletin() {
    let boletinDetallado = "Boletín Detallado:\n";

    for (const materia of materias) {
    boletinDetallado += `${materia.nombre}: ${materia.notas.join(", ")}\n`;
    }

    return boletinDetallado;
}

do {
    agregarMateria();

    const respuesta = prompt("¿Desea ingresar otra materia? (S/N)").toUpperCase();
    if (respuesta !== "S") {
    break;
    }
} while (true);

const promedio = calcularPromedio();
const boletin = generarBoletin();

alert(boletin + "\nPromedio: " + promedio.toFixed(2));

if (promedio >= 5.5) {
    alert("¡¡¡FELICITACIONES!!!\nPromovido al próximo año");
} else {
    alert("Tienes que recursar el año...");
}