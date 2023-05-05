import CustomerModel from "../models/customer-model.js";
const URL_API = "https://645284a8bce0b0a0f7492280.mockapi.io/"

const btnListarClient = document.querySelector('#listarC');
const btnRegistroClient= document.querySelector('#RegistrarC');
const navBAR = document.querySelector('#navbar');


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
function saveCustomer(){
    CustomerModel.createdAt='2023-02-02'
    CustomerModel.nombres="Juan Andres"
    CustomerModel.apellidos ="Acero Burgos"
    CustomerModel.email ="juanacbu128@gmail.com"
    CustomerModel.nMovil = "3142968734"
    CustomerModel.fechaNacimiento = "01-12-2000"
    postCustomer(CustomerModel);
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

const linksNavbar = document.querySelectorAll(".nav-link");
linksNavbar.forEach(link =>{
    link.addEventListener("click",(e)=>{
        let data = JSON.parse(e.target.dataset.verocultar);
        console.log(data);
        const divVer = document.querySelector(data[0]);
        divVer.style.display = "block";
        data[1].forEach(id=>{
        const divOcultar = document.querySelector(id);
        divOcultar.style.display="none";
        })
    })
})

btnListarClient.addEventListener('click',()=>{
    getCostumers();
})
btnRegistroClient.addEventListener('click',()=>{
    saveCustomer();
})
function viewData(data){
    console.log(data);
}