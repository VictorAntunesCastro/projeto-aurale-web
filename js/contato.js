const formContato = document.getElementById("form-contato");

formContato.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (formContato.checkValidity()) {
    const mensagemEnvio = document.getElementById("mensagem-envio");
    mensagemEnvio.classList.remove("d-none");
    formContato.reset();
    formContato.classList.remove("was-validated");
  } else {
    formContato.classList.add("was-validated");
  }
});
