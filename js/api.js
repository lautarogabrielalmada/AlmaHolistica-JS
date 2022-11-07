 function ConsultarApi(){

    const url = "https://jsonplaceholder.typicode.com/users";

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
                  const{name,email,username} = perfil;

        html += `  
        <div class="row">
        <div class="col-6">
                <div class="card " style="width: 18rem;">
            <div class="card-body apiCard">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${email}</p>
                <p class="card-text">${username}</p>
            </div>
            </div>
        </div>
    </div>
        
        
        
        `;

          apiContent.innerHTML = html;


      });

 };




 ConsultarApi();





