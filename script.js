function total () {
    let numero1 = Number (document.getElementById("numero1").value);
    let numero2 = Number (document.getElementById("numero2").value);
    let numero3 = Number (document.getElementById("numero3").value);
    let numero4 = Number (document.getElementById("numero4").value);
    let numero5 = Number (document.getElementById("numero5").value);

    let resultado = 750 * numero1 + 350 * numero2 + 500 * numero3 + 1000 * numero4 + 500 * numero5;

    document.getElementById("total").textContent=
    "El total de tu compra es: " + resultado;
}

function validar ()  {
    let contrasena = document.getElementById("contrasena").value;
    let  usuario = document.getElementById("usuario").value;
    
    if (usuario == "admin" && contrasena == "232323") {
        
        alert("Bienvenido al sistema");
        window.location.href = "bienvenida.html";
        return false;
     } else {
        alert("Usuario o contraseña incorrectos");
        return false;
    }
}
