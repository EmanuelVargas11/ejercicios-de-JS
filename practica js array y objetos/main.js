




// ***************************************************************//
// ************************Ejercicio 1:***************************//
// ***************************************************************//

/*
Crea un programa que solicite al usuario su nombre y apellido. Luego, muestra
una alerta con su nombre completo (nombre y apellido concatenados) utilizando
template strings
*/

// alert("Hola Visitante")
// let ingresoNombre = prompt("¿cual es tu nombre?");
// let ingresoApellido = prompt("¿cual es tu apellido?");

// console.log(ingresoNombre)
// console.log(ingresoApellido)

// alert(`Gracias por visitarnos, ${ingresoNombre} ${ingresoApellido}, hasta pronto!!!`);



//********************** arrays*************** //




// concat()

// let verduras = ["papa", "lechuga"]

// let fruta = ["mandarina", "frutilla"]


// let listaCompra = fruta.concat(verduras)



// console.log("Mi lista de compras es:", listaCompra)



//*************** objetos *********************//




//  let receta = {
//      nombre: "ñoquis",
//      ingredientes: ["papas", "harina", "sal", "condimentos"],
//      coccion: "45 minutos",
//  }


// console.log("los ingredientes son:", receta.ingredientes.join("-"))





// let ingresoNombre = prompt("ingrese su nombre")




// function saludar(ingresoNombre){
//     return  'Hola, ' + ingresoNombre
// }


// console.log(saludar(ingresoNombre));



// let ingresoNombre = prompt("ingrese su nombre")


// let saludar = (ingresoNombre) => `¡Hola,  ${ingresoNombre}!`



// console.log(saludar(ingresoNombre));






// ***************************************ejercicio *******************//

// let a = Number(prompt('ingrese un numero'))
// let b = Number(prompt('ingrese un numero'))



// function sumarNumeros(){
//     let suma = a + b;
    

// document.write('El resultado es: ', suma)
// }

// sumarNumeros(`${a}, ${b}`)




// let numero = [1, 2, 3, 4, 5]



// function calcularPromedio(numero) {
//     let suma = numero.reduce((total, numero) => total + numero, 0)

    
//     return suma / numero.length
    

// }


// console.log(calcularPromedio(numero));


// let marcas = ["hyundai", "motorola", "sony", "intel"]

// // let entero = 6



// //     let suma = 15 / 5 

// //     let resultado = suma
// //         console.log(resultado);

// console.log(marcas.slice(0, 2 ))





//1) Descripción del ejercicio:
/* Diseña una función en JavaScript que reciba un array de números.
La función debe devolver un nuevo array que contenga pares de 
números del array original.*/


// let numero1 = [1, 2, 3, 4,]


// let numeros2 = [22, 31, 51, 63, 79]



// function nuevoArray() {
//     const nuevo = numero1.concat(numeros2);
    
    
//     return nuevo
//     }




// nuevoArray()




function filtrarArrays() {
    
    const numeroPar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const ConcatenarArrray = [20, 21, 23, 31, 35]
    
    let nuevoArray = numeroPar.concat(ConcatenarArrray);
    return nuevoArray
    
}


filtrarArrays()