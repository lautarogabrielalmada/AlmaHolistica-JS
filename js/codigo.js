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

const productos = [
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

let carrito = [];

/*Preguntamos si quiere comprar un producto y validamos */

let seleccion = prompt("¿Hola, desea comprar algun producto?").toLocaleLowerCase();

console.log(seleccion);

while(seleccion != "si" && seleccion != "no"){

    alert("Porfavor ingrese si o no");
    seleccion = prompt("¿Desea comprar algun producto?").toLocaleLowerCase();
    console.log(seleccion);
    
};

//En caso de que sea si o no 

if(seleccion == "si"){

    alert("Nuestros productos son los siguientes:");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
    alert(todosLosProductos.join(" -- "));

}else if(seleccion == "no"){
    alert("Muchas gracias por visitarnos");
}



while(seleccion != "no"){

    let producto = prompt(`Agrega un producto a tu carrito: Kit herbal - sahumerio natural - sahumerio sagrada madre - sahumerio aromanza - 7 chakras - piramides energeticas - bombita herbal`).toLocaleLowerCase();
    let precio = 0;

    if (producto == "kit herbal" || producto == "sahumerio natural" || producto == "sahumerio sagrada madre" || producto == "sahumerio aromanza" || producto == "7 chakras" || producto == "piramides energeticas" || producto == "bombita herbal"){

        switch(producto){

            case "kit herbal":
                precio = 1220;
                break;
            
            case "sahumerio natural":
                precio = 352;
                break;

            case "sahumerio sagrada madre":
                precio = 334;
                break;

            case "sahumerio aromanza":
                precio = 420;
                break;    
                    
            case "7 chakras":
                precio = 352;
                break;

            case "piramides energeticas":
                precio = 488;
                break;

            case "bombita herbal":
                precio = 230;
                break;

            default:
                break;

        }

        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));

        carrito.push({producto,unidades,precio});
        console.log(carrito);

        seleccion = prompt("¿Quiere seguir comprando?").toLocaleLowerCase();

        while(seleccion === "no"){

            alert("Gracias por comprar")

             carrito.map((carritoFinal) => {
                alert(`Producto: ${carritoFinal.producto} / Unidades: ${carritoFinal.unidades} / Precio: $ ${carritoFinal.precio} / total a pagar: $ ${carritoFinal.unidades * carritoFinal.precio}`);
            })
        break;
        }

    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total a pagar por todo es de: $ ${total}`);


