function calcular(){
    let altura = document.querySelector('.altura').value;
    console.log(altura);
    let peso = document.querySelector('.peso').value;
    console.log(peso);
    
    let soma = Number(altura) * Number(altura) / Number(peso);
   document.querySelector("#resultado").innerHTML= soma;
   resultado(soma)
}   


function resultado(calcular) {
    let resultado = "";
    if(calcular <= 17 ){
        resultado = "Muito abaixo do Peso !! Estar abaixo do peso ideal pode ser mais perigoso à saúde do que a obesidade, independentemente de outros fatores de risco, como tabagismo, consumo excessivo de álcool e drogas ou doenças terminais.";
    }else if(calcular <= 17 && calcular >= 18 ){
        resultado = "Abaixo do Peso!! estar abaixo do peso é uma condição em que a pessoa pesa menos do que é considerado adequado para aquela altura, idade e sexo. Uma pessoa nestas condições pode estar com alguma doença que a está emagrecendo ou sua nutrição não está boa o suficiente. Normalmente estas pessoas podem ter deficiências de nutrientes como vitaminas, sais minerais, proteínas, gorduras ou sob o risco de estar com anorexia."
    }else if (calcular <= 18 && calcular >= 24 ){
        resultado = "Peso Normal!! Estar dentro da faixa de peso normal é significa ter um peso considerado adequado para sua altura, idade e sexo, de acordo com as faixas do IMC - momento de fazer a manutenção do peso Para manter o peso é importante manter uma dieta balanceada (não basta alimentos corretos, mas também quantidades corretas) para seu organismo. Devem ser avaliados peso, idade, composição corporal, presença de doenças e/ou comorbidades."
    }else if (calcular <= 25 && calcular >= 29 ){
        resultado = "Acima do Peso!! O sobrepeso é uma condição em que a pessoa pesa mais do que é considerado adequado para aquela altura, idade e sexo. O sedentarismo e os maus hábitos alimentares levam ao aumento dessa parcela de indivíduos com sobrepeso a cada ano. Essa faixa, se analisada junto com outras medidas e índices, pode demonstrar um risco maior de doenças como diabetes tipo 2, dislipidemia (com colesterol HDL baixo e triglicérides altos), ácido úrico aumentado, hipertensão, entre outras. "
    }else if(calcular <= 30 && calcular >= 34){
       resultado = "Obesidade I !!  O tratamento é realizado através de dieta apropriada com avaliação médica em conjunto com a prática de exercícios, desde que o paciente seja avaliado e liberado pelo médico. Além disso, é preciso que o paciente realize as atividades com o acompanhamento de um profissional de educação física. Em alguns casos avaliados pelo médico, pode-se fazer o uso de remédios para emagrecer para ajudar no controle do peso."
    }else if(calcular <= 35 && calcular >= 39){
        resultado = "Obesidade II !! Os riscos associados à obesidade de grau II são mais acentuados. Entre eles, estão a esteatose hepática, doenças articulares, hipertensão, diabetes mellitus, síndrome metabólica, cânceres, infarto agudo do miocárdio e acidente vascular cerebral, lembrando que estes dois últimos são as principais causas de morte no Brasil e no mundo."
     }else if(calcular >= 40 ){
        resultado = "Obesidade III !! Entre as patologias associadas à obesidade grau 3, estão os distúrbios hormonais, cardiopatias, morte súbita, dermatites, osteoporose, hipertensão, hepatopatias e insuficiência venosa. Porém, segundo a Organização Mundial de Saúde (OMS), a obesidade de grau III é a principal causa de morte evitável do mundo."
     }
    document.getElementById('valorImc').innerHTML = resultado;
}