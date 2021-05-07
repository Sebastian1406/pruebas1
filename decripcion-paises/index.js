let body = document.querySelector("body")

const invocarDescripcionBandera = (event) => {
    event.preventDefault()
    const api = "https://restcountries.eu/rest/v2/name/";
    let nombre = window.localStorage.getItem("nombre");

    fetch(api + nombre )

    .then(repuesta => repuesta.json())

    .then(data => renderizarContenido(data))
}


const renderizarContenido = (data) => {
    let main = document.querySelector("main")
    let salida = "";
    data.forEach(element => {
       salida +=  `
       <button id="regresar" class="regresar"><img id="back-icon" src="../images/left-arrow.svg"> Back</button>
       <div class="contenedor">
            <div class="bandera">
                <img src="${element.flag}" alt="">
            </div>
       <div class="descripcion">
                <h1>${element.name}</h1>
                <div class="contenedor-descripcion">
                    <div>
                        <p>Nombre nativo: <span>${element.nativeName}</span></p>
                        <p>Poplación: <span>${element.population}</span></p>
                        <p>Región: <span>${element.region}</span></p>
                        <p>Sub Región: <span>${element.subregion}</span> </p>
                        <p>Capital: <span>${element.capital}</span></p>
                    </div>
                    <div>
                        <p>Dominio: <span>${element.topLevelDomain}</span></p>
                        <p>Moneda: <span>${element.currencies[0].code}</span></p>
                        <p>Lenguaje: <span>${element.languages[0].name}</span></p>
                    </div>
                </div>
            </div>
       </div>`
})
    main.innerHTML = salida
}

const regresarInicio = (event) => {

    if(event.target.className == "regresar"){
        window.location.href = "../pagina-principal/index.html"
    }
}

body.addEventListener("click", regresarInicio)
window.addEventListener("load", invocarDescripcionBandera)