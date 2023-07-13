let contador = 12;
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
};