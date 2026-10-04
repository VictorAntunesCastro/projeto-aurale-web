const chips = document.querySelectorAll(".chip-input");
const btncalc = document.getElementById("btn-calcular");
const resultado = document.getElementById("resultado");
const btnreset = document.getElementById("btn-reset");
const form = document.getElementById("form-orcamento");

btncalc.addEventListener("click", function () {
  let valorTotal = 0;

  chips.forEach(function (chip) {
    if (chip.checked) {
      const preco = Number(chip.dataset.preco);
      const campoQtd = document.getElementById("qtd-" + chip.id);
      const qtd = campoQtd ? Math.max(1, Number(campoQtd.value) || 1) : 1;
      valorTotal += preco * qtd;
    }
  });

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