let main = document.querySelector("main")
let botonBuscar = document.querySelector("#botonBuscar")
let filtroRegion = document.querySelector("#filtroRegion");
let textoNombre = document.querySelector("#textoNombrePaises");
let opciones = document.querySelector("select");
let body = document.querySelector("body")

const obtenerDatosPaises = (event) => {
    event.preventDefault()
    let paises = textoNombre.value;
    const api = "https://restcountries.eu/rest/v2/name/";

    fetch(api + paises)

    .then(respuesta => respuesta.json())

    .then(data => renderizaContenido(data))
}
const obtenerDatosCategorias = (event) => {
    event.preventDefault()
    let filtroRegion = document.querySelector("#filtroRegion");
    let regiones = filtroRegion.value;
    const api = "https://restcountries.eu/rest/v2/region/";

    fetch(api + regiones)

    .then(respuesta => respuesta.json())

    .then(data => renderizaContenido(data))
}
const renderizaContenido = (data) => {
    let main = document.querySelector("main")
    let salida = "" ;
    main.innerHTML = "" ;
    data.forEach(element => {
        salida += `<div class="caja ">
        <div class="bandera">
        <img src="${element.flag}">
        </div>
        <div class="descripcion">
        <button class="boton-paises" value="${element.name}">${element.name}</button>
        <p>Population: <span>${element.population}</span</p>
        <p>Region: <span>${element.region}</span></p>
        <p>Capital: <span>${element.capital}</span></p>
        </div>
        </div>`
    })
    main.innerHTML = salida
    filtroRegion.value = "";
    textoNombre.value = ""

    
}
const limpiar = () => {
    filtroRegion.value = "";
    textoNombre.value = ""
}

const guardarDatosLocalStorange = (event) => {
    event.preventDefault()
    if(event.target.className == "boton-paises"){
        window.localStorage.setItem("nombre", event.target.value);
        window.location.href = "../decripcion-paises/index.html"
    }
}


body.addEventListener("click", guardarDatosLocalStorange)
opciones.addEventListener("click",obtenerDatosCategorias)
botonBuscar.addEventListener("click", obtenerDatosPaises)
window.addEventListener("load", limpiar)
