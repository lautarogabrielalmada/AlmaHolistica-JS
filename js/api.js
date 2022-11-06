function ConsultarApi(){

    const url = "https://picsum.photos/v2/list";

    fetch(url)

    .then( respuesta => {
        return respuesta.json()
    }) 
    .then(resultado => {
        mostrarHTML(resultado);
        console.log(resultado)
    })

}; 

function mostrarHTML(datos){

    const apiContent = document.querySelector("#apiContent");

    let html = "";

    datos.forEach(perfil => {
        
        const{author,download_url} = perfil;

        html += `
        
        <div class="row">
        <div>
                <div class="card " style="width: 18rem;">
            <img class="card-img-top" src="${download_url}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${author}</h5>
                <p></p>
                <button>Ver</button>
            </div>
            </div>
        </div>
    </div>
        
        
        
        `;

        apiContent.innerHTML = html;


    });

};



ConsultarApi();