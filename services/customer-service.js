const URL_API = "https://645284a8bce0b0a0f7492280.mockapi.io/"
const getCostumers = async()=>{
    try{
        const respuesta = await fetch(`${URL_API}/customers`);
        if(respuesta.status === 200){
            const datos = await respuesta.json();
       
        }
        
    }catch(error){

    }

}