var hayalgo = false;
var notaAnterior;


function mostrar(x) {
    document.querySelector(`.note:nth-last-child(${x})`).style.display = "flex";
    document.querySelector(`.note:nth-last-child(${x})`).style.height = "auto";
    document.querySelector(`.note:nth-last-child(${x})`).style.padding = "50px 20px 40px 20px";
    
}

function ocultar(x){
    document.querySelector(` .note:nth-last-child(${x})`).style.height = "0px";
    document.querySelector(` .note:nth-last-child(${x})`).style.padding = "0px";
    document.querySelector(` .note:nth-last-child(${x})`).style.display = "none";
}

function mostrarNota(x) {


    if(!hayalgo){
        document.getElementById('pleaseselectanote').style.display="none"; 
        mostrar(x);

        hayalgo=true;
        notaAnterior = x;
    } else {
        if(x == notaAnterior){
            document.getElementById('pleaseselectanote').style.display="block";
            ocultar(x);
            hayalgo=false;
            notaAnterior = x;
        } else {
            document.getElementById('pleaseselectanote').style.display="none";
            ocultar(notaAnterior);
            mostrar(x);
            hayalgo=true;
            notaAnterior = x;
        }
    }

}