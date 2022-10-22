

const shopContent = document.getElementById("shopContent");

/*Array con los productos*/



let carrito = [];


productos.forEach((producto)=>{

    //Creamos un div con document.createelement
    let content = document.createElement("div");
    content.className = "card"
    //Le asignamos contenido con innerhtml
    content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="price">${producto.precio}$</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar);

    //Ahora colocamos el div en el documento html con un padre con id y class
})

































/*

let productosSahumos= [];
let productosSahumerios= [];
let carrito = [];

function ComprarCatalogo(){

    Preguntamos que tipo quiere comprar y validamos

    let tipoDeProducto = prompt("¿Que productos quiere ver? (Sahumos - Sahumerios - Todos)").toLocaleLowerCase();

    while(tipoDeProducto != "sahumos" && tipoDeProducto != "sahumerios" &&  tipoDeProducto != "todos" ){
        alert("Indique el tipo que quiere");
        tipoDeProducto = prompt("¿Que productos quiere ver? (Sahumos - Sahumerios - Todos)").toLocaleLowerCase();
        break;
    };

    Hacemos la logica recorremos el array y guardamos segun lo que el usuario pide en el array correcto
    if(tipoDeProducto == "sahumos"){
       
       for(let productoSahumo of productos){

       
        if (productoSahumo.tipo == "sahumos"){

            productosSahumos.push(productoSahumo.nombre +" "+ "$" + productoSahumo.precio);
        }
        
       }

       
       let seleccion = prompt("¿Desea comprar algun producto?").toLocaleLowerCase();


        while(seleccion != "si" && seleccion != "no"){

            alert("Porfavor ingrese si o no");
            seleccion = prompt("¿Desea comprar algun producto?").toLocaleLowerCase();
            console.log(seleccion);
    
        };

       if(seleccion == "si"){

        alert("Nuestros productos son los siguientes:");
        alert(productosSahumos.join(" -- "));
    
        }else if(seleccion == "no"){
            alert("Muchas gracias por visitarnos");
        }

        while(seleccion != "no"){

            let producto = prompt(`Agrega un producto a tu carrito: kit herbal, 7 chakras, piramides energeticas, bombita herbal`).toLocaleLowerCase();
            let precio = 0;
        
            if (producto == "kit herbal" || producto == "7 chakras" || producto == "piramides energeticas" || producto == "bombita herbal"){
        
                switch(producto){
        
                    case "kit herbal":
                        precio = 1220;
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

    }else if(tipoDeProducto == "sahumerios"){

        for(let productoSahume of productos){

       
            if (productoSahume.tipo == "sahumerios"){
    
                productosSahumerios.push(productoSahume.nombre +" "+ "$" + productoSahume.precio);
            }
            
           }

           let seleccion = prompt("¿Desea comprar algun producto?").toLocaleLowerCase();


        while(seleccion != "si" && seleccion != "no"){

            alert("Porfavor ingrese si o no");
            seleccion = prompt("¿Desea comprar algun producto?").toLocaleLowerCase();
            console.log(seleccion);
    
            };

        if(seleccion == "si"){

            alert("Nuestros productos son los siguientes:");
            alert(productosSahumerios.join(" -- "));
        
            }else if(seleccion == "no"){
                alert("Muchas gracias por visitarnos");

            }

            while(seleccion != "no"){

                let producto = prompt(`Agrega un producto a tu carrito: sahumerio natural, sahumerio sagrada madre, sahumerio aromanza`).toLocaleLowerCase();
                let precio = 0;
            
                if (producto == "sahumerio natural" || producto == "sahumerio sagrada madre" || producto == "sahumerio aromanza"){
            
                    switch(producto){
            
                        case "sahumerio natural":
                            precio = 352;
                            break;
            
                        case "sahumerio sagrada madre":
                            precio = 334;
                            break;
            
                        case "sahumerio aromanza":
                            precio = 420;
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


    }else if(tipoDeProducto == "todos"){

        let seleccion = prompt("¿Desea comprar algun producto?").toLocaleLowerCase();


        while(seleccion != "si" && seleccion != "no"){

            alert("Porfavor ingrese si o no");
            seleccion = prompt("¿Desea comprar algun producto?").toLocaleLowerCase();
            console.log(seleccion);
    
            };

        if(seleccion == "si"){

            alert("Nuestros productos son los siguientes:");
            let todosLosProductos = productos.map((producto)=> producto.nombre + " " + "$" + producto.precio);
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


    }


}

class Producto {
    constructor(id, tipo, nombre, precio) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const crearProducto = () => {
    let idProducto = parseInt(prompt("Indique el numero identificativo del producto"));
    let tipoProducto = prompt("Indique el tipo de producto (sahumerio - sahumos)");
    let nombreProducto = prompt("Indique el nombre del producto");
    let precioProducto = parseInt(prompt("Indique el precio del producto"));
    
    const producto = new Producto(idProducto, tipoProducto, nombreProducto, precioProducto);
    productos.push(producto);
    return producto;
}
    
ComprarCatalogo();
crearProducto();*/

