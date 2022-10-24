

const shopContent = document.getElementById("shopContent");

let verCarrito = document.getElementById("verCarrito");

const modalContainer = document.getElementById("modalContainer");

const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];




/////////////////////////////////////////
productos.forEach((producto)=>{

    //Creamos un div con document.createelement
    let content = document.createElement("div");
    content.className = "card"
    //Le asignamos contenido con innerhtml
    content.innerHTML = `
    <img src="${producto.imag}">
    <h3>${producto.nombre}</h3>
    <p class="price">${producto.precio}$</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar);

    comprar.addEventListener("click",()=>{

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id);
        
        if (repeat === true){
            carrito.map((prod) => {
                if (prod.id === producto.id){
                    prod.cantidad++;
                }
            });
        }else{
            carrito.push({
                id: producto.id,
                imag:producto.imag,
                nombre:producto.nombre,
                precio:producto.precio,
                cantidad:producto.cantidad,
            })
            
        }

        carritoCounter();
        saveLocal();
        
    });
})

///////////////////////////////////////////////////


//Stringyfi para que pase como string, solo recibe string SET

const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify(carrito));
}





