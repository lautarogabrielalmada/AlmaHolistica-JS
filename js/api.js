 function ConsultarApi(){

    const url = "https://jsonplaceholder.typicode.com/comments";

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
                 const{name,email,body} = perfil;

        html += `     
        <div class="comment mt-4 text-justify float-left">
                    <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40">
                    <h4>${name}</h4>
                    <span>${email}</span>
                    <br>
                    <p>${body}</p>
                </div>
        
        
        
        `;

         apiContent.innerHTML = html;


     });

};




// ConsultarApi();





