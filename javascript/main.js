console.log("¡Hola desde el futuro! JavaScript está funcionando ");

document.querySelector("h1").addEventListener("click", function() {
  this.textContent = "¡Hiciste clic desde el futuro! ";
});
