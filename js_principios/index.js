// let saludo = "hola"; //variable que no se puee redeclarar en un bloque
// var adso = "MUNDO"; //variable tipo global que se puede re asignar
// const CC = 109568356; //las constantes son datos de cualquier tipo que no se nos permite reasignar en el bloque
// //pero las constantes no se deben reasignar por buenas practicas
// console.log(CC);
// {
//     const CC = 18663827;// no se debe haceer esto pues CC es constante
//     let saludo = "hola mundo";//otro bloque ya se puede reasignar un valor
//     console.log(saludo);
//     var adso = "HOOLA MUNDO 1";
//     console.log(adso);
//     console.log(CC);
//     //aqui podemos ver diferencia entre let var y const
//     {
//         console.log(CC);//se puede cambiar pero no se debe
//     }
// }``

// var nombre = "helder";
// var apellido = "Amado";
// console.log(`hola ${nombre} ${apellido} un gusto`);
// console.log(nombre.length);//cuenta las letras del nombre y arroja el nuimero 
// console.log(nombre[1]);//va de 0 a cantidad de letrasm, y nos arroja la letra de la posicion [1]

// console.clear();//limpia terminal
// var float = 61.7651;
// console.log(Math.round(float));//redondea el numero sin desimales
// console.log(float.toFixed(1));//redondea numero con las decimlaes que le indiquemos
// // prompt("ingrese dato")//ingreso de datos input
// // confirm("quieres continuar")//muestra una pregunta con aceptar o cancelar
// // alert("se puede imprimir algo y muetrea un alerta");//muestra un menssjer tipo alerta

// //funciomnes


// function increible(parametro = 200){// funcion "nombre"()parametro que tiene por defecto el valor de 200
//     return parametro;//retornamos el valor de parametro y asi esta enviabmnmdo algo
//     console.log(parametro);//no esta retornando solo imprime 

// }

// increible();//llamamos la funcion para que se ejecute
// console.clear();
// const esPrimo = function (numero){
//     let contador = 0;
//     for(let i=1; i <= numero; i++){
//         console.log (i);
//         if (numero % i ===0){
//             contador++;
//         }
//     }
//     if (contador === 2){
//         return true;
//         // return "el numero es primo";
//         // alert("el numero es primo");
//         // console.log
//         // ("el numero es primo");
        
//     }else if (contador<2 || contador>2){
//         return false;
//         // alert("el numero no es primo");
//         // console.log("el numero no es primo");
        
//     }
// }
// let respuesta = parseInt(prompt("ingerese numero"));
// let final = esPrimo(respuesta);
// if (final == true){
//     alert("el numero es primo");

// }else{
//     alert("el numero no es primo");
// }
// alert(final ? "si es primo" : "no es primo");  //operador terniario 



// //----------------------------------------------------------------------------------------------------------------------


// //funcion anonima

// (function (){
//     console.log("hola mundo");
// })()
// //funcion flecha gorda - arrow funcion
// const  flecha = (a, b) =>{
//     console.log(a+b);
//     return a+b;
// }
// const  flechas = (a, b) => (a>20)? a+b : a*b;//operdor terniario
// //si a es mator q 20 suma a +b si no entonces hace el a*b
// // console.log(respuestas);
// let respuestas = flecha(8, 6);
// //---------------------------------------------------------------------------------------

// //Crear un Array
// let frutas = ["Manzana", "Banana"];

// console.log(frutas.length);
// // 2


// //Acceder a un elemento de Array mediante su índice
// let primero = frutas[0];
// // Manzana

// let ultimo = frutas[frutas.length - 1];
// // Banana


// //Recorrer un Array
// frutas.forEach(function (elemento, indice, array) {
//   console.log(elemento, indice);
// });
// // Manzana 0
// // Banana 1


// //Añadir un elemento al final de un Array
// let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
// // ["Manzana", "Banana", "Naranja"]


// //Eliminar el último elemento de un Array
// let ultimo2 = frutas.pop(); // Elimina "Naranja" del final
// // ["Manzana", "Banana"]


// //Añadir un elemento al principio de un Array
// let nuevaLongitud2 = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
// // ["Fresa" ,"Manzana", "Banana"]


// //Eliminar el primer elemento de un Array
// let primero2 = frutas.shift(); // Elimina "Fresa" del inicio
// // ["Manzana", "Banana"]


// //Encontrar el índice de un elemento del Array
// frutas.push("Fresa");
// // ["Manzana", "Banana", "Fresa"]
// let pos = frutas.indexOf("Banana"); // (pos) es la posición para abreviar

// //---------------------------------------------------------------------------


// const objeto = {};    // Esto es un objeto vacío
// const player = {
//     nombre: "Manz",
//     life: 99,
//     power: 10,
// };

// // Notación con puntos (preferida)
// console.log(player.nombre);     // Muestra "Manz"
// console.log(player.life);     // Muestra 99

// player.nombre = "Helder";

// // Notación con corchetes
// console.log(player["nombre"]);  // Muestra "Helder"
// console.log(player["life"]);  // Muestra 99

// player.despedida = function(){return `chao se despide ${this.nombre}`;}
// console.log(player.despedida()); // Muestra "chao se despide Helder"
// a=10;
// b=20;
// if (typeof a === "number" && typeof b === "number"){
//     console.log(a + b);
//     if (b<1){

//     }
// }
// let dia = parseInt(prompt("ingerese numero"));

// switch(dia){
// case 1:
//     console.log ("hoy es lunes");
//     break;
// case 2:
//     console.log ("hoy es martes");
//     break;
// case 3: 
//     console.log ("hoy es miercoles");
//     break;
// case 4:
//     console.log ("hoy es jueves");
//     break;
// case 5:
//     console.log ("hoy es virnes");
// case 6:
//     console.log ("hoy es sabado");
//     break;
// case 7:
//     console.log ("hoy es domingo");
//     break;
// default:
//     console.log ("numero incorrecto");
// break;
// };
// for (let n=1; true ;n++){
//     let primo=0;
//     let contador = 0;
//     for(let i=1; i <= n; i++){
//         if (n % i ===0){
//             contador++;
//         }
//         if (contador==2){
//             console.log (`el numero ${n} es primo`);
//             primo+=1;
//         }
//     }
//     if (primo == 10)break;
    
// };
