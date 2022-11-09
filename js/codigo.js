

const shopContent = document.getElementById("shopContent");

let verCarrito = document.getElementById("verCarrito");

const modalContainer = document.getElementById("modalContainer");

const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];




/////////////////////////////////////////
productos.forEach((producto)=>{

    //Creo un div con document.createelement
    let content = document.createElement("div");
    content.className = "card"
    //Le asigno contenido con innerhtml
    content.innerHTML = `
    
    <div class="row">
        <div >
                <div class="card " style="width: 18rem;">
            <img class="card-img-top" src="${producto.imag}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
            </div>
            </div>
        </div>
    </div>
    `
    
    ;

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

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se agrego al carrito',
            showConfirmButton: false,
            timer: 1500
          })

        carritoCounter();
        saveLocal();
        
    });
})

///////////////////////////////////////////////////


//Stringyfi para que pase como string, solo recibe string SET

const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify(carrito));
}





