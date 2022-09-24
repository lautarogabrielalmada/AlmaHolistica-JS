
let sahumerio = 500;
let perfume = 3500;
let cantidad;
let precioFinal;
let edad;
let mensaje = "el precio final es de : "
const iva= 0.21;
let producto;

edad = parseInt(prompt("¿Cuantos años tiene?"));

while(edad < 18){
    edad = parseInt(prompt("Solo mayores de 18 pueden comprar"));
}

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









