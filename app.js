// let nombreApellido = "";
// const lista =[""];

// for (i = 1; i <= 20; i++){
//     nombreApellido =(prompt ('Ingrese nombre y apellido'))
//     lista.push(nombreApellido);

//     if (i == 20) {
//         alert("Se terminaron los cupos de incripcion");
//     }

// }
// console.log(lista);
let usuario = ""

const crearUsuarios = [{
    usuario:"",
    contrasenia:"",
    mail:""
}]

let listaDeUsuarios = []
let dataUsuarios = new Object()

for(i = 0; i < 5; i++){
dataUsuarios = {}
dataUsuarios['usuario'] = prompt ("ingresa usuario")
dataUsuarios['contrasenia'] = prompt ("ingresa contrasenia")
dataUsuarios['mail'] = prompt ("ingresa mail")
listaDeUsuarios.push(dataUsuarios);
}
console.log(listaDeUsuarios);
