const textArea = document.querySelector(".textarea");
const textAreaTraducida = document.querySelector(".textarea-traducida");

function botonEncriptar(){
    document.getElementById("imagenPersonita").style.display = "none"
    document.getElementById("textoDerecha").style.display = "none";
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";

    

    const textoEncriptado = encriptar(textArea.value);
    textAreaTraducida.value=textoEncriptado;
    textArea.value = "";
    
}


function encriptar(stringEncriptado){// este parametro va a recibir la entrada y sera lo que devuelva el resultado de mi funcion
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i= 0; i <matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0]))//indice y posicion, la llave que quiero verificar
        {
            stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
              
        }
    }
    return stringEncriptado
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    textAreaTraducida.value=textoEncriptado;
    textArea.value = "";
    
}

function desencriptar(stringDesencriptado){
    document.getElementById("imagenPersonita").style.display = "none"
    document.getElementById("textoDerecha").style.display = "none";
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i= 0; i <matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1]))//indice y posicion, la llave que quiero verificar
        {
            stringDesencriptado= stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0] )
              
        }
    }
    return stringDesencriptado
}

function copiar(){
    var contenido =textAreaTraducida;
    contenido.select();
    document.execCommand("cut");
    alert("se copió");
}
