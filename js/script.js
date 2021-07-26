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
    console.log(selecionado);
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
        botaoCompra--;
        selecionado.classList.add("esconder")
    }
    elemento.classList.add("selecionado");
    elemento.classList.remove("esconder")
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
        selecionado.classList.add("esconder")
    }
    elemento.classList.add("selecionado");
    elemento.classList.remove("esconder")
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
        selecionado.classList.remove("selecionado");
        selecionado.classList.add("esconder");
        botaoCompra--;
    }
    elemento.classList.add("selecionado");
    elemento.classList.remove("esconder");
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

function confirmarPedido(){
    let telaConfirma = document.querySelector(".escondido");
    let comida = document.querySelector(".comida");
    let bebidaF = document.querySelector(".bebida");
    let sobremesaF = document.querySelector(".sobremesa");
    let valorC = document.querySelector(".valorComida");
    let valorB = document.querySelector(".valorBebida");
    let valorS = document.querySelector(".valorSobremesa");
    let totalP = document.querySelector(".valorTotal");
    telaConfirma.classList.remove("escondido");
    comida.innerHTML = refeicao;
    bebidaF.innerHTML = bebida;
    sobremesaF.innerHTML = sobremesa;
    totalP.innerHTML = "R$ " + total;
    valorC.innerHTML = valorPrato.toFixed(2);
    valorB.innerHTML = valorBebida.toFixed(2);;
    valorS.innerHTML = valorSobremesa.toFixed(2);;
}

function cancelar(){
    let telaConfirma = document.querySelector(".caixa-tela");
    telaConfirma.classList.add("escondido");
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