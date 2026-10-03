const salao = document.getElementById("salao");
const qtdmesas = document.getElementById("qtd-mesas");
const qtdcadeiras = document.getElementById("qtd-cadeiras");
const btncalc = document.getElementById("btn-calcular");
const resultado = document.getElementById("resultado");
const btnreset = document.getElementById("btn-reset")
btncalc.addEventListener("click", function(){
    const valorMesas = Number(qtdmesas.value) * 50;
    const valorCadeiras = Number(qtdcadeiras.value) * 10;
    let valorSalao = 0;
    if(salao.checked){
        valorSalao = 1500;
    }
    const valorTotal = valorMesas + valorCadeiras + valorSalao;
    resultado.innerText = "Total:  R$" + valorTotal.toFixed(2);
})
btnreset.addEventListener("click", function(){
    resultado.innerText = "Total: R$ 0,00";
})