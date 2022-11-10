 
const quienCompro = document.getElementById("quienCompro");
 

quienCompro.addEventListener("click",()=>{

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
           <div class="mt-5 apiCard">
               <img src="https://assets.stickpng.com/images/585e4bd7cb11b227491c3397.png" class="api-img">
   
               <div>
               <h3>${name}</h3>
               <p>Email: ${email}</p>
               <span>Usuario: ${username}</span>
               </div>
   
           </div>
           
           
           
           `;
   
             apiContent.innerHTML = html;
   
   
         });
   
    };

    ConsultarApi();

});







 





