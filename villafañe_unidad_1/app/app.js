const $ = (selector) => document.querySelector(selector)

//validacion que el campo no este vacio
const validateEmpty = (value) => {
    return value != ""
}


//envio de form
$(".form").addEventListener("submit", (e) => {
    e.preventDefault()
  
    if (validateEmpty($("#name").value) && validateEmpty($("#lastName").value) && validateEmpty($("#dni").value) && validateEmpty($("#email").value) && validateEmpty( $("#telefono").value)) {
        alert("Gracias por contactarnos, a la brevedad se comunicaran contigo")
        $(".form").reset()
    }
})
const opcionBasico = 500;
const opcionIntermedio = 1000;
const opcionPremium = 1500;

function tipoSeguro() {
    const selectElement = document.getElementById("tipoSeguro");

    // Obtiene el valor seleccionado del select
    const valorSeleccionado = selectElement.value;

    // Obtiene la opción actual
    const opcionActualizar = selectElement.options[selectElement.selectedIndex];

    // Cambia el texto de la opción según el valor seleccionado
    if (valorSeleccionado === "basico") {
        opcionActualizar.textContent = "Basico - $" + opcionBasico;
    } else if (valorSeleccionado === "intermedio") {
        opcionActualizar.textContent = "Intermedio - $" + opcionIntermedio;
    } else if (valorSeleccionado === "premium") {
        opcionActualizar.textContent = "Premium - $" + opcionPremium;
    } else {
        opcionActualizar.textContent = "Elija";
    }
}

// Llama a la función cuando cambia la selección
document.getElementById("tipoSeguro").addEventListener("change", tipoSeguro);
