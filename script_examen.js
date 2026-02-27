function donar(input){
    alert("¡Gracias por la donacion a AdoptaTuÁrbol!");
}


let textox = document.getElementById("texto")

function select_filtro (input){
    textox.innerText = "Mostrando: " + input.value;
}


function adoptar(input){
    input.innerText = "Adoptado";
    input.style.background = "black";
    input.style.color = "white";
}