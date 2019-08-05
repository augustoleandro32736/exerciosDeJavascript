function calcular(){
    let nome = document.getElementById('nome_aluno').value;
    let notaAluno = document.getElementById('nota').value;
    let nome_aluno = document.getElementById('nome_aluno').value;
   if(nome){
       if(notaAluno){
        calcularLetra(notaAluno)
       }else{
       nome_aluno.innerHTML = "Campo Obrigatorio";
       }
        }else{
        nome_aluno.innerHTML = "Campo Obrigatorio";
    }
}   

function calcularLetra(valorEntrada) { 
    console.log(valorEntrada); 
    let letra;
    if(valorEntrada <= 100 && valorEntrada >= 80 ){
        //document.getElementById("resultado").innerHTML = "A";
        letra = "A";
    }else if(valorEntrada <= 79 && valorEntrada >= 60 ){
        //document.getElementById("resultado").innerHTML = "B"
        letra = "B";
    }else if (valorEntrada <= 59 && valorEntrada >= 40 ){
        //document.getElementById("resultado").innerHTML = "C"
        letra = "C";
    }else if (valorEntrada <= 39 && valorEntrada >= 20 ){
        //document.getElementById("resultado").innerHTML = "D"
        letra = "D";
    }else if(valorEntrada <= 19 && valorEntrada >= 0){
       // document.getElementById("resultado").innerHTML = "F"
       letra = "F";
    }
    document.getElementById('letra').innerHTML = letra ;
    status(letra)
}
function status(letra) {
    console.log(letra)
    if(letra === 'A' ){
        document.getElementById("aprovacao").innerHTML = "Aprovado"
    }else if(letra === 'B' ){
        document.getElementById("aprovacao").innerHTML = "Aprovado"
    }else if(letra === 'C' ){
        document.getElementById("aprovacao").innerHTML = "Aprovado"
    }else if(letra === 'D' ){
        document.getElementById("aprovacao").innerHTML = "reprovado"
    }else if(letra === 'F' ){
        document.getElementById("aprovacao").innerHTML = "reprovado"
    }
}

// && Significa e
// || Significa Ou
// Vai ter Inputs 
// Aluno A e aluno B -> Notas dos dois alunos de 0 a 100.
// Mostrar as notas no html
// Converter notas em Letras ( A (100-80) , B (79-60) , C (59-40), D (39-20) , F (19-0))
// Dica usar OU - Mostrar um emoticon feliz se Qualquer um dos dois tiverem nota A, ou um emoticon triste se qualquer um dos dois
// tiver nota D e F
// Mostrar quem passou de ano sendo que passar de ano e C
// Criar um index.html e index.js (javascript vai ficar no index.js)
// Bootstrap - Colocar bootstrap e usar nos inputs (quero ver um trem bonito).
