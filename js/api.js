// function ConsultarApi(){

//     const url = "https://picsum.photos/v2/list";

//     fetch(url)

//     .then( respuesta => {
//         return respuesta.json()
//     }) 
//     .then(resultado => {
//         mostrarHTML(resultado);
//         console.log(resultado)
//     })

// }; 

// function mostrarHTML(datos){

//     const apiContent = document.querySelector("#apiContent");

//     let html = "";

//     datos.forEach(perfil => {
        
//         const{author,download_url} = perfil;

//         html += `
        
//         <div class="row">
//         <div>
//                 <div class="card " style="width: 18rem;">
//             <img class="card-img-top" src="${download_url}" alt="Card image cap">
//             <div class="card-body">
//                 <h5 class="card-title">${author}</h5>
//                 <p></p>
//                 <button>Ver</button>
//             </div>
//             </div>
//         </div>
//     </div>
        
        
        
//         `;

//         apiContent.innerHTML = html;


//     });

// };



// ConsultarApi();

const giveProduct = document.querySelector("#giveProduct");

giveProduct.addEventListener("click",TraerProductos);

function TraerProductos(){
    fetch("productos-json/productos.json")

    .then(respuesta => {
        return respuesta.json()})
        
    .then(resultado => {
        console.log(resultado);
    })
}

function MostrarHTML(datos){
    productos.forEach((producto)=>{

        //Creo un div con document.createelement
        let content = document.createElement("div");
        content.className = "card"
        //Le asigno contenido con innerhtml
        content.innerHTML = `
        
        <div class="row">
            <div>
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
};

