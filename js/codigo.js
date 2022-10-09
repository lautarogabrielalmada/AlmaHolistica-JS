/* 
let sahumerio = 500;
let perfume = 3500;
const iva= 0.21;



function calcularEdad(){
    let edad;
    edad = parseInt(prompt("¿Cuantos años tiene?"));

    while(edad >= 0 && edad < 18){

        edad = parseInt(prompt("Usted es muy joven para comprar, tiene que ser mayor de 18!"));
    }



}


calcularEdad();

function calcularPrecioProductos(){
    let producto;    
    let precioFinal;
    let cantidad;
    let mensaje = "el precio final es de : "

    producto = prompt("¿Que quiere comprar? (Sahumerio, Perfume)").toLocaleLowerCase();

    if(producto == "sahumerio"){

        cantidad = prompt("Cuantas cajas de  Sahumerios quiere?");
        sahumerio += sahumerio * iva ;
        precioFinal = sahumerio * cantidad;
        

        alert(`Elegiste el sahumerio ${mensaje} $ ${precioFinal}`);

    }else if(producto == "perfume"){

        cantidad = prompt("Cuantos perfumes quiere?");
        perfume += perfume * iva ;
        precioFinal = perfume * cantidad;

        alert(`Elegiste el perfume ${mensaje} $ ${precioFinal}`);
    }

}

calcularPrecioProductos();

*/


/*Array con los productos*/

const Productos = [
    {
        id:1,
        tipo:"sahumos",
        nombre:"kit herbal",
        precio:1220
    },

    {
        id:2,
        tipo:"sahumerios",
        nombre:"sahumerio natural",
        precio:352
    },

    {
        id:3,
        tipo:"sahumerios",
        nombre:"sahumerio sagrada madre",
        precio:334
    },

    {
        id:4,
        tipo:"sahumerios",
        nombre:"sahumerio aromanza",
        precio:420
    },

    {
        id:5,
        tipo:"sahumos",
        nombre:"7 chakras",
        precio:352
    },

    {
        id:6,
        tipo:"sahumos",
        nombre:"piramides energeticas",
        precio:488
    },

    {
        id:7,
        tipo:"sahumos",
        nombre:"bombita herbal",
        precio:230
    },

];






