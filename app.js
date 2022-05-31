let nombreApellido = "";
const lista =[""];

for (i = 1; i <= 20; i++){
    nombreApellido =(prompt ('Ingrese nombre y apellido'))
    lista.push(nombreApellido);

    if (i == 20) {
        alert("Se terminaron los cupos de incripcion");
    }

}
console.log(lista);




