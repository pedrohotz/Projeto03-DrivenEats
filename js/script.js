let botaoCompra = 0;
let refeicao;
let bebida;
let sobremesa;
let valorTotal = 0;
let valorPrato = 0;
let valorSobremesa = 0;
let valorBebida = 0;
function selecionar(elemento){
    const selecionado = document.querySelector(".comida .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
        botaoCompra--;
    }
    elemento.classList.add("selecionado");
    if(elemento.classList.contains("selecionado")){
        botaoCompra++;
    }
    let prato = elemento.querySelector(".comida .titulo-prato");
    refeicao = prato.innerHTML;
    let preco = elemento.querySelector(".comida .preco");
    let valor = preco.innerHTML;
    valorPrato = parseFloat(valor);
    habilitarCompra();
}


function selecionarBebida(elemento){
    const selecionado = document.querySelector(".bebida .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado")
        botaoCompra--;
    }
    elemento.classList.add("selecionado");
    if(elemento.classList.contains("selecionado")){
        botaoCompra++;
    }
    let prato = elemento.querySelector(".bebida .titulo-prato");
    let preco = elemento.querySelector(".bebida .preco");
    let valor = preco.innerHTML;
    valorBebida = parseFloat(valor);
    bebida = prato.innerHTML;
    habilitarCompra();
}


function selecionarSobremesa(elemento){
    const selecionado = document.querySelector(".sobremesa .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado")
        botaoCompra--;
    }
    elemento.classList.add("selecionado");
    if(elemento.classList.contains("selecionado")){
        botaoCompra++;
    }
    let prato = elemento.querySelector(".sobremesa .titulo-prato");
    let preco = elemento.querySelector(".sobremesa .preco");
    let valor = preco.innerHTML;
    valorSobremesa = parseFloat(valor);
    sobremesa = prato.innerHTML;
    habilitarCompra();
}

function habilitarCompra(){
    if (botaoCompra === 3){
        valorTotal = valorPrato + valorBebida + valorSobremesa;
        const botao = document.querySelector(".selet");
        botao.innerHTML = "Fechar Pedido";
        botao.classList.add("habilitado");
    }
}
