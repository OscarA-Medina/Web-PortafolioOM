//función aplicar estilos a la opción seleccionada en el menu y quitar la previamente seleccionada

function seleccionar(link) {
    var opciones = document.querySelectorAll("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado"

    // hacer desaparecer el menú una vez se ha seleccionado en el modo responsive

    var x = document.getElementById("nav");
    x.className = "";
}

//función del menú responsive

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Sección formulario con API de FORMSPREE

const $form = document.querySelector("#form")
 const $buttonMailto = document.querySelector("#micorreo")

$form.addEventListener("submit", handleSubmit)

/* async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    })
    if (response.ok) {
        this.reset
        alert("Gracias por tu mensaje")
    } */

function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:contacto.omedina@gmail.com?subject=nombre: ${form.get('name')}  correo: ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()
    }    
