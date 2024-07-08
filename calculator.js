
function Escribe(texto) {
    
    if (document.getElementById("pantalla").value == "0") {
        document.getElementById("pantalla").value = "";
    }

    let loquehabia = document.getElementById("pantalla").value; 
    document.getElementById("pantalla").value = loquehabia + texto;
}

function Calculate() {
    let resultado;
    resultado = eval(document.getElementById("pantalla").value)
    document.getElementById("pantalla").value = resultado;
}

function Reset() {
    document.getElementById("pantalla").value = "0";
}

