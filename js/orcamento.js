const salao = document.getElementById("salao");
const qtdmesas = document.getElementById("qtd-mesas");
const qtdcadeiras = document.getElementById("qtd-cadeiras");
const btncalc = document.getElementById("btn-calcular");
const resultado = document.getElementById("resultado");
const btnreset = document.getElementById("btn-reset");
const form = document.getElementById("form-orcamento");

btncalc.addEventListener("click", function () {
  const valorMesas = Number(qtdmesas.value) * 50;
  const valorCadeiras = Number(qtdcadeiras.value) * 10;
  let valorSalao = 0;
  if (salao.checked) {
    valorSalao = 1500;
  }
  const valorTotal = valorMesas + valorCadeiras + valorSalao;
  resultado.innerText =
    "Total: " +
    valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
});

btnreset.addEventListener("click", function () {
  resultado.innerText = "Total: R$ 0,00";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Solicitação enviada! Retornaremos em até 24 horas.");
  form.reset();
  resultado.innerText = "Total: R$ 0,00";
});