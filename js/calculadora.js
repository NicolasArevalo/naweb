var operacionCadena = [];
var operacion = 0;
$('#0').click(function(){
    $('#screen').append('0');
    operacionCadena.push('0');
    
})
$('#1').click(function(){
    $('#screen').append('1');
    operacionCadena.push('1');
    
})
$('#2').click(function(){
    $('#screen').append('2')
    operacionCadena.push('2');
})
$('#3').click(function(){
    $('#screen').append('3')
    operacionCadena.push('3');
})
$('#4').click(function(){
    $('#screen').append('4')
    operacionCadena.push('4');
})
$('#5').click(function(){
    $('#screen').append('5')
    operacionCadena.push('5');
})
$('#6').click(function(){
    $('#screen').append('6')
    operacionCadena.push('6');
})
$('#7').click(function(){
    $('#screen').append('7')
    operacionCadena.push('7');
})
$('#8').click(function(){
    $('#screen').append('8')
    operacionCadena.push('8');
})
$('#9').click(function(){
    $('#screen').append('9')
    operacionCadena.push('9');
})
$('#mas').click(function(){
    $('#screen').append('+')
    operacionCadena.push('+');
})
$('#menos').click(function(){
    $('#screen').append('-')
    operacionCadena.push('-');
})
$('#multiplicar').click(function(){
    $('#screen').append('x')
    operacionCadena.push('*');
})
$('#dividir').click(function(){
    $('#screen').append('/')
    operacionCadena.push('/');
})

$('#igual').click(function(){
    document.getElementById('screen').value = '';
    console.log(operacionCadena.length)
    for(var i = 0; i<operacionCadena.length ; i++){
        operacion += operacionCadena[i];
    }
    operacionCadena.forEach(function(){
        
    })
    console.log(operacion)
    operacion = []
})
