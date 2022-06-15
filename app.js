

let respuesta = document.querySelector("tbody");
let entrada = document.querySelector("#entrada");
let datos = [];


// eventos
document.addEventListener("DOMContentLoaded", mostrarDatos)
entrada.addEventListener("keyup", validarInput);


//funciones
async function mostrarDatos() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const resp = await fetch(url);
    const data = await resp.json();
    datos = data;

    let html = ''
    datos.forEach(item => {
        html += `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.email}</td>
               </tr>
                `
    })
    respuesta.innerHTML = html


}

function validarInput(e) {
    let valor1 = (e.target.value).toLowerCase();
    //let html
    let html = ''
    //iterar
    datos.forEach(item => {
        let valor2 = item.name.toLowerCase();
        if (valor2.includes(valor1)) {
            html += `
            <tr>
              <td>${item.name}</td>
              <td>${item.email}</td>
           </tr>
            `
        }
    })
    if (html.length == 0) {
        html = `<tr class="table-danger">
                   <td >Datos no encontrados</td>
                   <td >x</td>
                </tr>`
    }
    respuesta.innerHTML = html
}

