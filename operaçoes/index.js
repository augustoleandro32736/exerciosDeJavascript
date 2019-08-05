

function calcular(){
    console.log('calcular')
    let valor1 = parseInt(document.getElementById('numero1').value,);
    let valor2 = parseInt(document.getElementById('numero2').value,);
    let resultado = parseInt(valor1) + parseInt(valor2);
    document.getElementById("resultado").innerHTML= resultado;
    
}
  // Aqui eh a funcao de diminuir
function diminuir(){
    console.log('diminuir')
    let subtraendo1 = parseInt(document.getElementById('subitraendo1').value,);
    let subtraendo2 = parseInt(document.getElementById('subitraendo2').value,);
    let resultadoSubitracao = parseInt(subtraendo1) - parseInt(subtraendo2);
    document.getElementById("resultadoSubitracao").innerHTML= resultadoSubitracao;
    
}

 // Aqui eh a funcção de multiplicação
function multiplicar(){
    console.log('multiplicar')
    let multiplicador1 = parseInt(document.getElementById('multiplicador1').value,);
    let multiplicador2 = parseInt(document.getElementById('multiplicador2').value,);
    let respostaMultiplicacao = parseInt(multiplicador1) * parseInt(multiplicador2);
    document.getElementById("respostaMultplicacao").innerHTML= respostaMultiplicacao;
    
}

 //essa e a funçao de dividir

function dividir(){
    console.log('dividir')
    let divisor1 = parseInt(document.getElementById('divisor1').value,);
    let divisor2 = parseInt(document.getElementById('divisor2').value,);
    let respostaDivisao = parseInt(divisor1) / parseInt(divisor2);
    document.getElementById("respostaDivisao").innerHTML= respostaDivisao;
    
}