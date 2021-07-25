let botaoCompra = 0;
let refeicao;
let bebida;
let sobremesa;
let total = 0;
let valorPrato = 0;
let valorSobremesa = 0;
let valorBebida = 0;
let nome;
let endereço;

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
    console.log(valor);
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
        let valorTotal = valorPrato + valorBebida + valorSobremesa;
        total = valorTotal.toFixed(2);
        const botao = document.querySelector(".selet");
        const botaoHabilitado = document.querySelector(".botao-habilitado");
        botao.classList.add("desabilitado");
        botao.classList.remove("habilitado");
        botaoHabilitado.classList.remove("desabilitado");

    }
}

function fecharPedido(){
    nome = prompt("Qual seu nome?");
    endereço = prompt("Digite o endereço");
    const mensagemPardrão = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
    - Prato: ${refeicao}\n
    - Bebida: ${bebida}\n
    - Sobremesa: ${sobremesa}\n
    Total: R$ ${total}\n
    Nome: ${nome}\n
    Endereço: ${endereço}`);
    window.location.href = `https://wa.me/5532984878558?text=${mensagemPardrão}`;
}