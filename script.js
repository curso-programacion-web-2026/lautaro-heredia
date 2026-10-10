let nombre = "lautaro";
if (nombre === "lautaro") {
    console.log("El nombre es Lautaro");
}
let apellido =  "heredia"
  if (apellido === "heredia") {
    console.log("El apellido es Heredia");
  }
  let edad = 20
  if (edad >= 20) {
    console.log("La persona es mayor de edad");
  }
  let ciudad = "cordoba"
  if (ciudad === "cordoba") {
    console.log("La ciudad es Córdoba");
  }
let (hora<16 );
  if(hora<10) {
    console.log("buenos dias")
  } else if (hora<16) {
    console.log("buenas tardes")
  } else if (hora<20) {
    console.log("buenas noches")
  }

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let ciudad = document.getElementById("ciudad").value;
    let hora = document.getElementById("hora").value;

    // Validar y mostrar los datos en la consola
    if (nombre === "lautaro") {
        console.log("El nombre es Lautaro");
    }
    if (apellido === "heredia") {
        console.log("El apellido es Heredia");
    }
    if (edad >= 20) {
        console.log("La persona es mayor de edad");
    }
    if (ciudad === "cordoba") {
        console.log("La ciudad es Córdoba");
    }s
});


