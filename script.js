var inpText = document.getElementById("texto");
var botonBorrar = document.getElementById("borrar");
var mayus = document.getElementById("buttonMayus");
var minus = document.getElementById("buttonMinus");
var cantCaracteres = document.getElementById("buttonNum");

botonBorrar.addEventListener("click", function borrar() {
    inpText.value = ""
    inpText.focus();
});

mayus.addEventListener("click", function toUpper() {
    inpText.value = inpText.value.toUpperCase();
});

minus.addEventListener("click", function toLower() {
    inpText.value = inpText.value.toLowerCase()
});

cantCaracteres.addEventListener("click", function cantCar() {
    inpText.value = "El texto tiene " + inpText.value.length + " caracteres.";
});

