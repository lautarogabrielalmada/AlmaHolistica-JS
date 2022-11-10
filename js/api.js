 
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
               <img src="https://img.freepik.com/foto-gratis/chico-worldface-espanol-fondo-blanco_53876-137665.jpg?w=826&t=st=1668043510~exp=1668044110~hmac=7ad0608fd673020d552eed0dbd1a1a336162e40de6eda5a8505304790216b3ca" class="api-img">
   
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







 





