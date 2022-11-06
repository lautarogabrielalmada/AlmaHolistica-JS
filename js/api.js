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

function TraerProductos(){
    fetch("productos-json/productos.json")

    .then(respuesta => {
        return respuesta.json()})
        
    .then(resultado => {
        mostrarHTML(resultado);
        console.log(resultado);
    })
}

function MostrarHTML(datos){

    

   datos.forEach(producto => {

    const shopContent = document.querySelector("#shopContent");

    let content = document.createElement("div");
    content.className = "card"

    const{nombre,precio,imag} = producto;

    content.innerHTML = `
            
    <div class="row">
        <div>
                <div class="card " style="width: 18rem;">
            <img class="card-img-top" src="${imag}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">$${precio}</p>
            </div>
            </div>
        </div>
    </div>
            
            
            
          `;
    
    shopContent.append(content);



   });
};


MostrarHTML();
