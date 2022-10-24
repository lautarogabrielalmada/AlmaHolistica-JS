

const pintarCarrito = () =>{

    modalContainer.innerHTML = "";

    modalContainer.style.display="flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h2 class="modal-header-title">Carrito</h2>
    `;

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h3");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click",()=>{
        modalContainer.style.display = "none";
    });



    modalHeader.append(modalButton);

    carrito.forEach((producto) => {

        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src = "${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <span class="restar">-</span>
        <p>Cantidad: ${producto.cantidad}</p>
        <span class="sumar">+</span>
        <p>Total: ${producto.cantidad * producto.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");

        restar.addEventListener("click",()=>{
            if(producto.cantidad !== 1){
                producto.cantidad--;
            }
            
            pintarCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar");

        sumar.addEventListener("click",()=>{
            
            producto.cantidad++;
            pintarCarrito();
        });


        console.log(carrito.length);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click",eliminarProducto)
    });



    //Total del carrito

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0); 

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `
    total a pagar: ${total} $`;
    modalContainer.append(totalBuying);



};

verCarrito.addEventListener("click", pintarCarrito);

//Eliminar Producto

const eliminarProducto = () => {
    //busca dentro del carro y me vas a dar el id
    const foundId = carrito.find((element)=> element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carritoCounter();
    saveLocal();
    pintarCarrito();
    

};

//Contar productos en carrito

const carritoCounter = () => {
   cantidadCarrito.style.display = "block";

   const carritoLength = carrito.length;

   localStorage.setItem("carritoLength", JSON.stringify("carritoLength"));

   cantidadCarrito.innerText = JSON.parse(localStorage.getItem(""));
};

carritoCounter();