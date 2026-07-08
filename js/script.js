// =========================================
// ELEMENTOS DEL DOM
// =========================================

const contenedorProyectos = document.getElementById("contenedorProyectos");

const modalProyecto = document.getElementById("modalProyecto");

const contenidoModal = document.querySelector(".modal-contenido");


// =========================================
// INICIO
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    cargarProyectos();

});


// =========================================
// GENERAR TARJETAS
// =========================================

function cargarProyectos() {


    contenedorProyectos.innerHTML = "";


    proyectos.forEach(proyecto => {


        const tecnologias = proyecto.tecnologias.join(" • ");


        const tarjeta = document.createElement("div");


        tarjeta.classList.add(

            "card-proyecto",

            proyecto.estado

        );



        tarjeta.innerHTML = `

            <div class="categoria-proyecto">

                <span></span>

                ${proyecto.categoria}

            </div>


            <div class="info-proyecto">


                <h3>

                    ${proyecto.nombre}

                </h3>


                <p>

                    ${proyecto.descripcion}

                </p>


                <div class="tecnologias-card">

                    ${tecnologias}

                </div>


                <div class="estado">

                    ${
                        proyecto.estado === "completado"
                        ? "✔ Completado"
                        : "🚧 En desarrollo"
                    }

                </div>


            </div>

        `;



        if(proyecto.estado === "completado"){


            tarjeta.addEventListener("click", () => {

                abrirProyecto(proyecto);

            });


        }


        contenedorProyectos.appendChild(tarjeta);


    });


}


// =========================================
// ABRIR MODAL
// =========================================

function abrirProyecto(proyecto){


    const imagenPrincipal = proyecto.imagenes[0];


const miniaturas = proyecto.imagenes
    .map(imagen => `

        <img 
            class="miniatura"
            src="${imagen}"
            onclick="cambiarImagen('${imagen}')"
        >

    `)
    .join("");



    contenidoModal.innerHTML = `


<button class="cerrar-modal">

    ✕

</button>


<h2>

    ${proyecto.nombre}

</h2>


<p>

    ${proyecto.descripcion}

</p>


<div class="imagen-principal-container">

    <img 
        id="imagenPrincipal"
        src="${imagenPrincipal}"
        onclick="ampliarImagen('${imagenPrincipal}')"
    >

</div>


<div class="miniaturas">

    ${miniaturas}

</div>


<h3>

    Tecnologías utilizadas

</h3>


<p>

    ${proyecto.tecnologias.join(" • ")}

</p>


`;



    modalProyecto.classList.remove("oculto");



    document
    .querySelector(".cerrar-modal")
    .addEventListener("click", cerrarModal);


}
    


// =========================================
// CERRAR MODAL
// =========================================

function cerrarModal(){


    modalProyecto.classList.add("oculto");


}

function cambiarImagen(imagen){


    document.getElementById("imagenPrincipal").src = imagen;


}



function ampliarImagen(imagen){


    const visor = document.createElement("div");


    visor.className = "visor-imagen";


    visor.innerHTML = `

        <img src="${imagen}">

    `;


    visor.addEventListener("click", () => {

        visor.remove();

    });


    document.body.appendChild(visor);


}