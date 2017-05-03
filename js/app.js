/*
 * Archivo principal de funcionalidad de JS
 */
 var imagen = document.getElementsByClassName("imagen");
 for(var i=0; i<imagen.length; i++){
   imagen[i].addEventListener("click", mostrarImagen)
 }

 function mostrarImagen(){
   var padre= document.getElementById("work");
   var div = document.createElement("div");
   div.id="imagenGrande";
   div.setAttribute("class","contenedorImagenGrande");
   var imagen = document.createElement("img");
   imagen.setAttribute("class","tamanoImagenGrande");
   imagen.src = this.src;
   var btnCerrar = document.createElement("button");
   btnCerrar.textContent="X";
   btnCerrar.id="btnCerrar";
   btnCerrar.setAttribute("class", "btnCerrar");
   btnCerrar.setAttribute("onclick","cerrarImagen()");
   padre.appendChild(div);
   div.appendChild(imagen);
   div.appendChild(btnCerrar);
 }

 function cerrarImagen(){
   var padre= document.getElementById("work");
   var imagenGrande = document.getElementById("imagenGrande");
   padre.removeChild(imagenGrande);

 }
