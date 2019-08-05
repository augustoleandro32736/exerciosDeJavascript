function verificar() {
    let altura = document.getElementById('altura').value;
    let largura = document.getElementById('largura').value;
    conferir(altura,largura)
}

function  conferir(al,la) {
    let resultado = "";
    if(al > la){
        resultado ="vertical"
    }else if (al < la){
        resultado ="Horizontal"
    }
    document.getElementById('resultado').innerHTML= resultado;
}