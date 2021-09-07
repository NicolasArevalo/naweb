var operacionCadena = [];
var operacion = 0;
var num=0;
var respuesta;
var op='';
var hayrespuesta = false;

$('#0').click(function(){
    verSiHayRespuesta()
    $('#screen').append('0');
    operacionCadena.push('0');
    
})
$('#1').click(function(){
    verSiHayRespuesta()
    $('#screen').append('1');
    operacionCadena.push('1');
    
})
$('#2').click(function(){
    verSiHayRespuesta()
    $('#screen').append('2')
    operacionCadena.push('2');
})
$('#3').click(function(){
    verSiHayRespuesta()
    $('#screen').append('3')
    operacionCadena.push('3');
})
$('#4').click(function(){
    verSiHayRespuesta()
    $('#screen').append('4')
    operacionCadena.push('4');
})
$('#5').click(function(){
    verSiHayRespuesta()
    $('#screen').append('5')
    operacionCadena.push('5');
})
$('#6').click(function(){
    verSiHayRespuesta()
    $('#screen').append('6')
    operacionCadena.push('6');
})
$('#7').click(function(){
    verSiHayRespuesta()
    $('#screen').append('7')
    operacionCadena.push('7');
})
$('#8').click(function(){
    verSiHayRespuesta()
    $('#screen').append('8')
    operacionCadena.push('8');
})
$('#9').click(function(){
    verSiHayRespuesta()
    $('#screen').append('9')
    operacionCadena.push('9');
})


function clean(){
    operacionCadena=[];
    operacion=0;
}

function verSiHayRespuesta(){
    if(hayrespuesta){
        $('#screen').empty();
        clean();
    }
    hayrespuesta=false;
}


function crearNumero(){
    for(var i = 0; i<operacionCadena.length ; i++){
        operacion += operacionCadena[i];
    }
}

function funcionOperacion(){
    if(num==0){
        num = parseFloat(operacion);
    }else{
        operarNumerosIntermedios(op);
    }
}

function operarNumerosIntermedios(op){
    if(op=='sumar'){
        num = num + parseFloat(operacion);        
    }else if(op=='restar'){
        num = num - parseFloat(operacion);
    }else if(op=='multiplicar'){
        num = num * parseFloat(operacion);
    }else if(op=='dividir'){
        num = num / parseFloat(operacion);
    }
}

$('#limpiarPantalla').click(function(){
    $('#screen').empty();
})


$('#mas').click(function(){

    $('#screen').append('+')
    crearNumero();
    funcionOperacion()
    op = 'sumar';
    clean();
})
$('#menos').click(function(){
    $('#screen').append('-')
    crearNumero();
    funcionOperacion()
    op = 'restar';
    clean();
})
$('#multiplicar').click(function(){
    $('#screen').append('x')
    crearNumero();
    funcionOperacion()
    op = 'multiplicar';
    clean();
})
$('#dividir').click(function(){
    $('#screen').append('/')
    crearNumero();
    funcionOperacion()
    op = 'dividir';
    clean();
})

$('#igual').click(function(){
    $('#screen').empty();
    crearNumero();

    if(op=='sumar'){
        respuesta = num + parseFloat(operacion);
        
    }else if(op=='restar'){
        respuesta = num - parseFloat(operacion);
        
    }else if(op=='multiplicar'){
        respuesta = num * parseFloat(operacion);
        
    }else if(op=='dividir'){
        respuesta = num / parseFloat(operacion);
    }
    $('#screen').append(respuesta);
    
    num=0;
    hayrespuesta = true;
    num=0;
    
    clean();

})

