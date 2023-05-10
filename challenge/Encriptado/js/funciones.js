var mensajeB = "";
    var mensajeA = "";
    var aux="";
    function cifra() {
        document.getElementById("mesaje_cifrado").innerHTML="";
        mensajeB="";
        mensajeA = document.getElementById("mensaje_a_cifrar").value;
        var i =0;

        do{
            aux = mensajeA[i];

            switch (aux) {
                case 'a': mensajeB +="ai"; break;
                case 'e': mensajeB +="enter"; break;
                case 'i': mensajeB += "imes"; break;
                case 'o': mensajeB += "ober"; break;
                case 'u': mensajeB += "ufat"; break;
                default: mensajeB += aux; break;
            }
            document.getElementById("mesaje_cifrado").innerHTML= mensajeB;
            i++;
        }while(i < mensajeA.length);     

    }

    function descifra(){

        mensajeB="";
        mensajeB = document.getElementById("mensaje_a_cifrar").value;
        mensajeB= mensajeB.replaceAll("ai","a");
        mensajeB= mensajeB.replaceAll("enter","e");
        mensajeB= mensajeB.replaceAll("imes","i");
        mensajeB= mensajeB.replaceAll("ober","o");
        mensajeB= mensajeB.replaceAll("ufat","u");
        document.getElementById("mesaje_cifrado").innerHTML= mensajeB;
        
    }
    function copiar(){
        var msj= document.getElementById("mesaje_cifrado").textContent;
        // alert(msj);
        navigator.clipboard.writeText(msj);
    }
    