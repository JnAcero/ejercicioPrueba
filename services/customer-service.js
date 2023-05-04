import CustomerModel from "../models/customer-model";
const URL_API = "https://645284a8bce0b0a0f7492280.mockapi.io/"

const btnListarClient = document.querySelector('#listarC');

//Encabezado indica que tipo de recurso le envio al servidor
const myHeaders = new Headers({
    "Content-Type":"application/json"
});
const postCustomer = (datos)=>{

    fetch(`${URL_API}/customers`,
    {
        method:"POST",
        headers: myHeaders,
        body: JSON.stringify(CustomerModel)
    }
    ).then(data=>{
        return data.json()
    }).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
}


const getCostumers = async()=>{
    try{
        const respuesta = await fetch(`${URL_API}/customers`);
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            viewData(datos);
       
        }else if(respuesta.status === 400){
            console.log("Pusiste la llave mal")

        }else if(respuesta.status === 404){

            console.log("LO que buscas no existe")
        }else {
            console.log("HUbo un error y no sabemos que paso")
        }

        
        
    }catch(error){

    }

}
btnListarClient.addEventListener('click',()=>{
    getCostumers();
})

function viewData(data){
    console.log(data);
}